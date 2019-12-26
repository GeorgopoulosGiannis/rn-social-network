import {
    FETCH_MESSAGES,
    SET_GUEST,
    SET_OWNER,
    SEND_MESSAGE,
    ADD_MESSAGE,
    MESSAGES_LOADING,
    SET_ONLINE
} from "../actions/types";

const initialState = {

    messages: [],
    messages_loading: false,
    ownerEmail: "",
    guest: {},
    chatLoading: false,
    onlineList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_OWNER:
            return {
                ...state, ownerEmail: action.payload
            }
        case SET_GUEST:
            return {
                ...state, guest: action.payload
            }
        case SET_ONLINE:
            return {
                ...state, onlineList: action.payload
            }
        case MESSAGES_LOADING:
            return {
                ...state, messages_loading: true
            }
        case FETCH_MESSAGES:
            return {
                ...state, messages: action.payload, messages_loading: false
            }
        case SEND_MESSAGE:
            return {
                ...state, messages: [...action.payload, ...state.messages]
            }
        case ADD_MESSAGE:
            return {
                ...state, messages: [action.payload, ...state.messages]
            }
        default:
            return state
    }

}