/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './components/Login';
import Home from './components/Home';
import { Scene, Router, Actions} from 'react-native-router-flux';


export default class RouterComponent extends Component{
  
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="auth"  hideNavBar>
          <Scene 
            component={Login}
            key="login"
            title="Login"
            hideNavBar
            initial
          />
        </Scene>
        <Scene 
        type='replace'
        hideNavBar
          key="home"
          component={Home}
          title="Home"
          panHandlers={null}
        />
     </Scene>
    </Router>
  );
  }
}

