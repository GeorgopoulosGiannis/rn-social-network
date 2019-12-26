import { FETCH_MESSAGES, SET_GUEST, SET_OWNER, SEND_MESSAGE } from "../actions/types";

const initialState = {

    messages: [],
    ownerEmail: "",
    guest: {},
    chatLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_OWNER:
            return {
                ...state, ownerEmail: action.payload
            }
        case SET_GUEST: {
            return {
                ...state, guest: action.payload
            }
        }
        case FETCH_MESSAGES:
            return {
                ...state, messages: action.payload
            }
        case SEND_MESSAGE:
            return {
                ...state, messages: [...action.payload,...state.messages]
            }
        default:
            return state
    }

}