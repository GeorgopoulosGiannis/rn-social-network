import {
  SERVER_CHANGED,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN,
  SIGN_OUT,
  SET_ERROR,
  CLEAR_ERROR,
  LOGIN_LOADING,
  SET_OWNER,
} from "./types";

import { navigate } from "../navigationRef";
import api from "../api/request";
import AsyncStorage from '@react-native-community/async-storage';

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

export const tryLocalSignin = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: USER_LOGIN, payload: token,signalR:true });
      navigate("contacts");
    } else {
      navigate("login");
    }
  };
}

export const loginUser = ({
  email,
  password
}) => {
  return dispatch => {
    dispatch({
      type: LOGIN_LOADING,
      payload: true
    })
    api.post('/api/User/login', {
      email,
      password
    }).then(async response => {

      if (response.status == 200) {
        await AsyncStorage.setItem("token", response.data);
        await AsyncStorage.setItem("email", email)
        dispatch({
          type: SET_OWNER,
          payload: email
        })
        dispatch({
          type: USER_LOGIN,
          payload: response.data,
          signalR:true
        })
        navigate("main");
      } else {
        console.log(response)
        dispatch({
          type: SET_ERROR,
          payload: response.data.error
        })
      }

    }).catch(err => {
      console.log(err)
      dispatch({
        type: SET_ERROR,
        payload: err.message
      })
    })

  };
};

export const registerUser = ({
  email,
  password
}) => {
  return dispatch => {
    dispatch({
      type: LOGIN_LOADING,
      payload: true
    })
    api.post('/api/User/register', {
      email,
      password
    }).then(async response => {

      if (response.status == 200) {
        await AsyncStorage.setItem("token", response.data);
        dispatch({
          type: USER_LOGIN,
          payload: response.data,
          signalR:true
        })
        navigate("main");
      } else {
        dispatch({
          type: SET_ERROR,
          payload: response.data.error
        })
      }

    }).catch(err => {
      dispatch({
        type: SET_ERROR,
        payload: err.message
      })
    })

  };
};
