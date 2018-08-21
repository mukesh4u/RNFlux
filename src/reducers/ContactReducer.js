import {
  CONTACT_SYNC_SUCESS,
  CONTACT_SYNC_FAIL,
  CONTACT_SYNCING
}from '../actions/types';

const INITIAL_STATE = {
  contacts: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
   case CONTACT_SYNC_SUCESS:
      return { ...state, ...INITIAL_STATE, contacts: action.payload };
   case CONTACT_SYNC_FAIL:
      return { ...state, error: action.payload, loading: false };
   case CONTACT_SYNCING:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};


