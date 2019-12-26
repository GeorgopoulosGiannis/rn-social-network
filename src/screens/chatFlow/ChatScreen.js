import React from 'react';
import { ActivityIndicator } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { connect } from "react-redux"
import { fetchMessages, setOwner, sendMessage } from "../../actions/chatActions"
import { NavigationEvents } from "react-navigation"
import AsyncStorage from "@react-native-community/async-storage"

const ChatScreen = ({ fetchMessages, messages, ownerEmail, setOwner, sendMessage, messages_loading }) => {
    const setOwnerFromLocalStorage = async () => {
        setOwner(await AsyncStorage.getItem('email'));
    }

    return (
        <>
            <NavigationEvents onWillFocus={() => { setOwnerFromLocalStorage() }} />
            {messages_loading ?
                <ActivityIndicator size="large" color="#0000ff" /> : <GiftedChat
                    messages={messages}
                    onSend={message => {
                        sendMessage(message);
                        //GiftedChat.append(messages, message)
                    }}
                    user={{
                        _id: ownerEmail,
                    }} />}
        </>
    )

}
const mapStateToProps = (state) => {

    return {
        messages: state.chat.messages,
        ownerEmail: state.chat.ownerEmail,
        messages_loading: state.chat.messages_loading
    }
}
export default connect(mapStateToProps, { fetchMessages, setOwner, sendMessage })(ChatScreen);