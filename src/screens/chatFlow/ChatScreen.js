import React, { useEffect } from 'react';
import { GiftedChat } from "react-native-gifted-chat";
import { connect } from "react-redux"
import { fetchMessages, setOwner, sendMessage } from "../../actions/chatActions"
import { NavigationEvents } from "react-navigation"
import AsyncStorage from "@react-native-community/async-storage"

const ChatScreen = ({ fetchMessages, messages, ownerEmail, setOwner, sendMessage }) => {
    const setOwnerFromLocalStorage = async () => {
        setOwner(await AsyncStorage.getItem('email'));
    }

    return (
        <>
            <NavigationEvents onWillFocus={() => { setOwnerFromLocalStorage() }} />
            {ownerEmail ? <GiftedChat
                messages={messages}
                onSend={message => { 
                    sendMessage(message);
                    //GiftedChat.append(messages, message)
                     }}
                user={{
                    _id: ownerEmail,
                }} /> : null}
        </>
    )

}
const mapStateToProps = (state) => {

    return {
        messages: state.chat.messages,
        ownerEmail: state.chat.ownerEmail
    }
}
export default connect(mapStateToProps, { fetchMessages, setOwner, sendMessage })(ChatScreen);