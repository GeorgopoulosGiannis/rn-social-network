import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { ListItem, Divider, Text,Badge,withBadge,Avatar } from "react-native-elements";
import SearchBar from '../../components/SearchBar'
import { connect } from "react-redux"
import { NavigationEvents } from "react-navigation";
import { fetchContacts, fetchSuggestions } from "../../actions/contactsActions";
import { setGuest, setOwner, loadChat, fetchMessages } from "../../actions/chatActions"
import styles from "./ContactsScreen.style"

const ContactsScreen = ({ navigation,contacts_loading, contacts, fetchContacts,suggestions_loading, suggestions, fetchSuggestions, setGuest, setOwner, fetchMessages }) => {
    const [term, setTerm] = useState("");
    //const [searchApi, results, errorMessage] = useResults();
    const BadgedAvatar = withBadge(null, { status: "success", left: 25 })(Avatar);
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => console.log('asdf')}
            />
            <NavigationEvents onWillFocus={() => { fetchContacts(), fetchSuggestions() }} />
            {contacts_loading ?
                <ActivityIndicator size="large" color="#0000ff" /> :
                contacts.map((profile, index) => (
                    <ListItem
                        onPress={() => {
                            setGuest(profile);
                            fetchMessages(profile);
                            //navigation.navigate('chat')
                        }}
                        key={index}
                       leftAvatar={<BadgedAvatar source={{ uri: profile.avatar }} rounded={true} />}
                       // leftAvatar={{ source: { uri: profile.avatar } }}
                        title={profile.alias}
                        subtitle={profile.description}
                        bottomDivider
                    />
                ))
            }
            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={styles.suggestionHeader} h4>Suggestions</Text>
            {suggestions_loading ?
                <ActivityIndicator size="large" color="#0000ff" /> :
                suggestions.map((profile, index) => (
                    <ListItem
                        onPress={
                            () => {
                                console.log(profile)
                                console.log(index)
                            }
                        }
                        key={index}
                        leftAvatar={{ source: { uri: profile.avatar } }}
                        title={profile.alias}
                        subtitle={profile.description}
                        bottomDivider
                    />
                ))
            }
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts,
        suggestions: state.contacts.suggestions,
        contacts_loading:state.contacts.contacts_loading,
        suggestions_loading:state.contacts.suggestions_loading
    }
}

export default connect(mapStateToProps, { fetchContacts, fetchSuggestions, setGuest, setOwner, fetchMessages })(ContactsScreen);