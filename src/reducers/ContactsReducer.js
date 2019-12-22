import {
    FETCH_CONTACTS,
    CONTACTS_LOADING,
    FETCH_SUGGESTIONS,
    SUGGESTIONS_LOADING
} from '../actions/types';

const initialState = {
    contacts: [],
    suggestions: [],
    contacts_loading: false,
    suggestions_loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONTACTS_LOADING:
            return {
                ...state, contacts_loading: true
            }
        case FETCH_CONTACTS:
            return {
                ...state, contacts: action.payload, contacts_loading: false
            }
        case SUGGESTIONS_LOADING:
            return {
                ...state, suggestions_loading: true
            }
        case FETCH_SUGGESTIONS:
            return {
                ...state, suggestions: action.payload, suggestions_loading: false
            }
        default:
            return state
    }
}