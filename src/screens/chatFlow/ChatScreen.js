import React from 'react';
import { GiftedChat } from "react-native-gifted-chat";



const ChatScreen = () => {

    const messages = [
        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        },
    ]


    return (
        <GiftedChat
            messages={messages}
            onSend={messages => console.log('asdf')}
            user={{
                _id: 1,
            }} />
    )

}

export default ChatScreen;