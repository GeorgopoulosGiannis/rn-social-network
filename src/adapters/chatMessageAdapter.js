export const adaptClientMessageForServer = (message, emailTo) => {

    let chatMessage = {};
    chatMessage["from"] = message.user._id;
    chatMessage["to"] = emailTo
    //        chatMessage["to"] = chatState.guest.email;
    chatMessage["message"] = message.text;
    chatMessage["timestamp"] = message.createdAt;
    chatMessage["unread"] = true;
    console.log(chatMessage)
    return chatMessage;

}

export const adaptServerMessageForClinet = () => {

}