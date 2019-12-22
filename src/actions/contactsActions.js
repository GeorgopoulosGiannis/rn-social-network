import {
    FETCH_CONTACTS,
    FETCH_SUGGESTIONS,
    CONTACTS_LOADING,
    SUGGESTIONS_LOADING,
    SET_CONTACTS_ERROR,
    SET_SUGGESTIONS_ERROR
} from "./types";

import api from "../api/request";

export const fetchContacts = () => {
    return dispatch => {
        dispatch({
            type: CONTACTS_LOADING,
            payload: true
        })
        api.get('/Friends', {
            params: {
                status: 1
            }
        })
            .then(response => {
                if (response.status == 200) {
                    dispatch({
                        type: FETCH_CONTACTS,
                        payload: response.data
                    })
                }
                else {
                    dispatch({
                        type: SET_CONTACTS_ERROR,
                        payload: response.data.error
                    })
                }

            }).catch(error => {
                dispatch({
                    type: SET_CONTACTS_ERROR,
                    payload: error
                })
            });
    }
}

export const fetchSuggestions = () => {
    return dispatch => {
        dispatch({
            type: SUGGESTIONS_LOADING,
            payload: true
        })
        api.get('/Profile/suggestions')
            .then(response => {
                if (response.status == 200) {
                    dispatch({
                        type: FETCH_SUGGESTIONS,
                        payload: response.data
                    })
                }
                else {
                    dispatch({
                        type: SET_SUGGESTIONS_ERROR,
                        payload: response.data.error
                    })
                }

            }).catch(error => {
                console.log(error)
                dispatch({
                    type: SET_SUGGESTIONS_ERROR,
                    payload: error
                })
            });
    }

}