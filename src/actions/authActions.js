import {
    SERVER_CHANGED,
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN,
    SIGN_OUT,
    SET_ERROR,
    CLEAR_ERROR,
    LOGIN_LOADING,
  } from "./types";
  
  import { navigate } from "../navigationRef";
  import api from "../api/request";
  
  export const setErrorMessage = errorMessage => {
    return {
      type: SET_ERROR,
      payload: errorMessage
    };
  };

  export const usernameChanged = text => {
    return {
      type: USERNAME_CHANGED,
      payload: text
    };
  };
  
  export const passwordChanged = text => {
    return {
      type: PASSWORD_CHANGED,
      payload: text
    };
  };
  
  export const loginUser = ({
    email,
    password
  }) => {
    return dispatch => {
      dispatch({
        type:LOGIN_LOADING,
        payload:true
      })
      api.post('/User/login', {
        email,
        password
      }).then(response => {
        
        if (response.status==200) {
          dispatch({
            type: USER_LOGIN,
            payload: response.data
          })
          navigate("contacts");
        } else {
          dispatch({
            type: SET_ERROR,
            payload: response.data.error
          })
        }
  
      }).catch(err => {
        dispatch({
          type:SET_ERROR,
          payload:err.message
        })
      })
  
    };
  };