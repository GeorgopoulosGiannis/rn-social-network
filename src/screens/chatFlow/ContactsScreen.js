import React, { useState } from "react";
import { View } from "react-native";
import { ListItem, Divider, Text } from "react-native-elements";
import SearchBar from '../../components/SearchBar'
import { connect } from "react-redux"
import { NavigationEvents } from "react-navigation";
import { fetchContacts, fetchSuggestions } from "../../actions/contactsActions";
import { setGuest, setOwner, loadChat, fetchMessages } from "../../actions/chatActions"
import styles from "./ContactsScreen.style"

const ContactsScreen = ({ navigation, contacts, fetchContacts, suggestions, fetchSuggestions, setGuest, setOwner, fetchMessages }) => {
    const [term, setTerm] = useState("");
    //const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => console.log('asdf')}
            />
            <NavigationEvents onWillFocus={() => { fetchContacts(), fetchSuggestions() }} />
            {
                contacts.map((profile, index) => (
                    <ListItem
                        onPress={() => {
                            setGuest(profile.email);
                            fetchMessages(profile.email,profile.avatar);
                            //navigation.navigate('chat')
                        }}
                        key={index}
                        leftAvatar={{ source: { uri: profile.avatar } }}
                        title={profile.alias}
                        subtitle={profile.description}
                        bottomDivider
                    />
                ))
            }
            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={styles.suggestionHeader} h4>Suggestions</Text>
            {
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
        suggestions: state.contacts.suggestions
    }
}

export default connect(mapStateToProps, { fetchContacts, fetchSuggestions, setGuest, setOwner, fetchMessages })(ContactsScreen);