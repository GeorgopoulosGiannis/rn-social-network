import { FETCH_MESSAGES,SET_GUEST,SET_OWNER } from "../actions/types";

const initialState = {

    messages: [],
    ownerEmail: "",
    guestEmail: "",
    chatLoading:false

}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_OWNER:
            return {
                ...state, ownerEmail: action.payload
            }
        case SET_GUEST: {
            return {
                ...state, guestEmail: action.payload
            }
        }
        case FETCH_MESSAGES:
            return {
                ...state, messages: action.payload
            }
        default:
            return state
    }

}