import {
    SERVER_CHANGED,
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN,
    SIGN_OUT,
    SET_ERROR,
    CLEAR_ERROR,
    LOGIN_LOADING,
  } from "../actions/types";
  
  const initialState = {
    username: "",
    password: "",
    token: null,
    errorMessage: "",
    loading: false
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SERVER_CHANGED:
        return {
          ...state, server: action.payload
        }
      case USERNAME_CHANGED:
        return {
          ...state, username: action.payload
        };
      case PASSWORD_CHANGED:
        return {
          ...state, password: action.payload
        };
      case USER_LOGIN:
        return {
          ...state, token: action.payload, loading: false
        };
      case SIGN_OUT:
        return {
          token: null, errorMessage: ""
        };
      case SET_ERROR:
        return {
          ...state, errorMessage: action.payload, loading: false
        };
      case CLEAR_ERROR:
        return {
          ...state, errorMessage: ""
        };
      case LOGIN_LOADING:
        return {
          ...state, loading: true, errorMessage: ""
        }
      default:
        return state;
    }
  };