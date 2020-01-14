import {
    FETCH_MESSAGES,
    SET_GUEST,
    SEND_MESSAGE,
    ADD_MESSAGE,
    MESSAGES_LOADING,
    SET_ONLINE,
    HUB_CONNECTED
} from "../actions/types";

const initialState = {

    messages: [],
    messages_loading: false,
    guest: {},
    chatLoading: false,
    onlineList: [],
    hubConnected: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case HUB_CONNECTED:
            return {
                ...state, hubConnected: action.payload
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