import {
    SET_OWNER,
    SET_GUEST,
    FETCH_MESSAGES,
    CHAT_LOADING,
    SEND_MESSAGE,
    ADD_MESSAGE,
    MESSAGES_LOADING,
    DISCONNECTED_FROM_HUB
} from "./types";
import api from "../api/request";
import { navigate } from "../navigationRef";
import { adaptServerMessageForClient } from "../adapters/chatMessageAdapter";

export const fetchMessages = (profile) => {
    return dispatch => {
        dispatch({
            type: MESSAGES_LOADING,
            paylod: true
        })
        api.get('/api/messages', {
            params: {
                to: profile.email
            }
        }).then(response => {
            let messages = response.data.map(message => {
                return adaptServerMessageForClient(message, profile.alias);
            })
            dispatch({
                type: FETCH_MESSAGES,
                payload: messages
            })
        })
    }
}
export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}

export const sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        payload: message,
        signalR: true
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
