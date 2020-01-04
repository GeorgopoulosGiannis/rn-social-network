import React, { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { ListItem, Divider, Text, Badge, withBadge, Avatar } from "react-native-elements";
import SearchBar from '../../components/SearchBar'
import { connect } from "react-redux"
import { fetchContacts, fetchSuggestions } from "../../actions/contactsActions";
import { setGuest, setOwner, fetchMessages, fetchUnreadMessages } from "../../actions/chatActions"
import styles from "./ContactsScreen.style"


const ContactsScreen = ({
    navigation,
    contacts_loading,
    contacts,
    fetchContacts,
    suggestions_loading,
    suggestions,
    fetchSuggestions,
    setGuest,
    setOwner,
    fetchMessages,
    onlineList
}) => {
    const [term, setTerm] = useState("");
    //const [searchApi, results, errorMessage] = useResults();
    const BadgedAvatar = withBadge(null, { status: "success", left: 25 })(Avatar);
    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item }) => {
        console.log('renderItem')
        let avatar;
        if (onlineList.indexOf(item.email) > -1) {
            avatar = <BadgedAvatar source={{ uri: item.avatar }} rounded={true} />
        } else {
            avatar = { source: { uri: item.avatar } }
        }
        return <ListItem
            onPress={() => {
                setGuest(item);
                fetchMessages(item);
            }}
            leftAvatar={avatar}
            title={item.alias}
            subtitle={item.description}
            bottomDivider
        />
    }
    useEffect(() => {
        fetchContacts();
        fetchSuggestions();
    }, [])
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => console.log('asdf')}
            />
            {contacts_loading ?
                <ActivityIndicator size="large" color="#0000ff" /> :
                <FlatList
                    keyExtractor={keyExtractor}
                    data={contacts}
                    renderItem={renderItem}
                />}
            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={styles.suggestionHeader} h4>Suggestions</Text>
            {suggestions_loading ?
                <ActivityIndicator size="large" color="#0000ff" /> :
                <FlatList
                    keyExtractor={keyExtractor}
                    data={suggestions}
                    renderItem={renderItem}
                />}
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts,
        suggestions: state.contacts.suggestions,
        contacts_loading: state.contacts.contacts_loading,
        suggestions_loading: state.contacts.suggestions_loading,
        onlineList: state.chat.onlineList
    }
}

export default connect(mapStateToProps, {
    fetchContacts,
    fetchSuggestions,
    setGuest,
    setOwner,
    fetchMessages,
    fetchUnreadMessages
})(ContactsScreen);