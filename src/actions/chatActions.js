import { SET_OWNER, SET_GUEST, FETCH_MESSAGES, CHAT_LOADING, SEND_MESSAGE } from "./types";
import api from "../api/request";
import { navigate } from "../navigationRef";

export const fetchMessages = (profile) => {
    return dispatch => {
        api.get('/api/messages', {
            params: {
                to: profile.email
            }
        }).then(response => {
            let messages = response.data.map(message => {
                return {
                    _id: message.id,
                    text: message.message,
                    createdAt: message.timeStamp,
                    user: {
                        _id: message.from,
                        name:profile.alias,
                        avatar:  'https://placeimg.com/140/140/any',//avatar: 'profile.avatar',
                    },
                    unread: message.unread
                }
            })
            dispatch({
                type: FETCH_MESSAGES,
                payload: messages
            })
        })

    }
}

export const sendMessage = (message)=>{
    return{
        type:SEND_MESSAGE,
        payload:message,
        signalR:true
    }
}

export const setOwner = (email) => {
    return {
        type: SET_OWNER,
        payload: email
    }
}


export const setGuest = (profile) => {
    return dispatch => {
        dispatch({
            type: SET_GUEST,
            payload: profile
        })
        navigate('chat')
    }
}
export const loadChat = (boolean) => {
    return {
        type: CHAT_LOADING,
        payload: boolean
    }
}