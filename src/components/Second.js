import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import { fetchAllContact } from '../actions';
import { connect } from 'react-redux';


class Second extends Component {

 componentDidMount() {
    this.requestContactPermission();
  }

 async requestContactPermission() {
  try {
    const granted =  await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
        );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.warn("You can fetch contact");
      this.props.fetchAllContact();
    } else {
      console.warn("contact permission denied");
    }
  } catch (err) {
    console.warn(err)
  }
}

 render() {
    return (
      <ScrollView>
        <Text style={styles.textSecond}> SECOND PAGE </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textSecond: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  fetchAllContact
})(Second);
