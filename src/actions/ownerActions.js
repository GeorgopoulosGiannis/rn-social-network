import {
    FETCH_OWNER_PROFILE
} from "./types";

import { navigate } from "../navigationRef";
import api from "../api/request";

export const fetchOwnerProfile = (email) => {
    console.log('fetchowner')
    return dispatch => {
        api.get('/api/profile', {
            params: {
                email: email
            }
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err)
        })
    }
}