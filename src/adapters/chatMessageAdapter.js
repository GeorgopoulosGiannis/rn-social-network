export const adaptClientMessageForServer = (message, store) => {
    let chatState = store.getState().chat;
    let chatMessage = {};
    chatMessage["from"] = message.user._id;
    chatMessage["to"] = chatState.guest.email;
    chatMessage["message"] = message.text;
    chatMessage["timestamp"] = message.createdAt;
    chatMessage["unread"] = true;
    console.log(chatMessage)
    return chatMessage;

}

export const adaptServerMessageForClient = (chatMessage,guestAlias) => {
    return {
        _id: chatMessage.id,
        text: chatMessage.message,
        createdAt: chatMessage.timeStamp,
        user: {
            _id: chatMessage.from,
            name: guestAlias,
            avatar: 'https://placeimg.com/140/140/any',//avatar: 'profile.avatar',
        },
        unread: chatMessage.unread
    }
}