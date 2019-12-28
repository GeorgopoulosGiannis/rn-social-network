import { FETCH_OWNER_PROFILE } from "../actions/types";

const initialState = {
    profile: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OWNER_PROFILE:
            return { ...state, profile: action.payload }
        default:
            return state
    }
}