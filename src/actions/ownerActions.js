import {
    FETCH_OWNER_PROFILE,
    UPLOAD_IMAGE
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
            console.log(response)
            dispatch({
                type: FETCH_OWNER_PROFILE,
                payload: response
            })
            console.log(response);
        }).catch(err => {
            console.log(err)
        })
    }
}

export const uploadImage = (file, userEmail) => {
    return dispatch => {
        api.post('/api/image/add', {
            uploaderEmail: userEmail,
            FileName: file.fileName,
            FileType: file.type,
            DataBase64: file.data
        }).then(res => {
            console.log(res);
            dispatch({
                type: UPLOAD_IMAGE,
                payload: res.data
            })
            let profileDTO = { Avatar: res.data }
            api.post('/api/profile/update', profileDTO).then(res => {
                console.log(res)
            }).catch(err=>{
                console.log(err);
            })


        }).catch(err => {
            console.log(err);
        });
    }
}