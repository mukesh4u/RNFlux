import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL
} from './types';
var userDAta = require('../user.json');

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: (text)? text.trim() : text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    if(email =='mukesh' && password == 'mukesh') {
      loginUserSuccess(dispatch,userDAta)
    }else if(email =='') {
    dispatch({ type: LOGIN_USER_FAIL, payload: 'email required' });
    }else if(password =='') {
     dispatch({ type: LOGIN_USER_FAIL, payload: 'password required' });
    }
   
  };
}

export const loginUserSuccess = (dispatch, user) => {
  console.warn(user);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
 // Actions.main({type:'reset'});
   Actions.home();
};
  
const loginUserFail = (error, dispatch) => {
  var error_message ='Authentication Failed.';
  // console.warn(error.code);
  if (error == 1){
    error_message = 'There is no user account associated with this email.'
  } else if (error==2){
    error_message = 'This password does not match this email.'
  } 
  dispatch({ type: LOGIN_USER_FAIL, payload: error_message });
};