import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
  
  render() {
    var name = this.props.user.name;
    console.warn(name);
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

//export default Home;
const mapStateToProps = (state) => {
  const { user } = state.auth;

  return { user };
};

export default connect(mapStateToProps)(Home);