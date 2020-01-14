import { FETCH_OWNER_PROFILE, UPLOAD_IMAGE, SET_OWNER } from "../actions/types";

const initialState = {
    profile: {},
    image: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OWNER_PROFILE:
            return { ...state, profile: action.payload }
        case UPLOAD_IMAGE: {
            return { ...state, image: action.payload }
        }
        case SET_OWNER: {
            return { ...state, profile: action.payload }
        }
        default:
            return state
    }
}