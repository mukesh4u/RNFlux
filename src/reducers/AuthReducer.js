import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL
}from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  display_name: '',
  name: '',
  city: '',
  account_type: '',
  firstname:'',
  lastname:'',
  birthdate:'',
  gender:'',
  confirm_password:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    // return new object with all properties of state
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
   case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
   case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, password: '', loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};


