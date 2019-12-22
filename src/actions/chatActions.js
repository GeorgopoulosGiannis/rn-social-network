import { SET_OWNER, SET_GUEST, FETCH_MESSAGES, CHAT_LOADING } from "./types";
import api from "../api/request";
import { navigate } from "../navigationRef";

export const fetchMessages = (email,avatar) => {
    return dispatch => {
        api.get('/messages', {
            params: {
                to: email
            }
        }).then(response => {
            let messages = response.data.map(message=>{
                return{
                    _id:message.id,
                    text:message.message,
                    createdAt:message.timeStamp,
                    user:{
                        _id:message.from
                    },
                    avatar:avatar,
                    unread:message.unread
                }
            })
            dispatch({
                type: FETCH_MESSAGES,
                payload: messages
            })
        })

    }


}

export const setOwner = (email) => {
    return {
        type: SET_OWNER,
        payload: email
    } 
}


export const setGuest = (email) => {
    return dispatch => {
        dispatch({
            type: SET_GUEST,
            payload: email
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