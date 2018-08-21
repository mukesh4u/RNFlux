import Contacts from 'react-native-contacts';
import {
  CONTACT_SYNC_SUCESS,
  CONTACT_SYNC_FAIL,
  CONTACT_SYNCING
}from '../actions/types';

export const fetchAllContact = () => {
    console.warn("fetching contact1");
 return (dispatch) => {
     console.warn("fetching contact");
    //dispatch({ type: LOGIN_USER });
    Contacts.getAll((err, contacts) => {
        if (err) {
            console.warn("error=="+err);
            
            dispatch({ type: CONTACT_SYNC_FAIL, payload: 'contact syncing failed' });
            
        }else {
            // contacts returned
            console.warn(contacts);
            dispatch({ type: CONTACT_SYNC_SUCESS, payload: contacts });
        }
    })
 };
}