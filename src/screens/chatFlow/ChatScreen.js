import React from 'react';
import { ActivityIndicator } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { connect } from "react-redux"
import { fetchMessages, sendMessage } from "../../actions/chatActions"
import { NavigationEvents } from "react-navigation"

const ChatScreen = ({
    fetchMessages,
    messages,
    profile,
    sendMessage,
    messages_loading
}) => {

    return (
        <>
            {messages_loading ?
                <ActivityIndicator size="large" color="#0000ff" /> : <GiftedChat
                    messages={messages}
                    onSend={message => {
                        sendMessage(message);
                        //GiftedChat.append(messages, message)
                    }}
                    user={{
                        _id: profile.email,
                    }} />}
        </>
    )

}
const mapStateToProps = (state) => {

    return {
        messages: state.chat.messages,
        profile: state.owner.profile,
        messages_loading: state.chat.messages_loading
    }
}
export default connect(mapStateToProps, { fetchMessages, sendMessage })(ChatScreen);