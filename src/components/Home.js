/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import First from './First';
import Second from './Second';
import Four from './Four';

import { Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const iconProfile = () => (
    <Icon color='#f53d3d' name='user-o' size={25} />
)

const icon2 = () => (
    <Icon color='#f53d3d' name='bookmark' size={25} />
)
const icon3 = () => (
    <Icon color='#f53d3d' name='description' size={25} />
)

export default class Home extends Component{
  
  render() {
    return (
      <Router>
      <Scene key="root" tabs={true} hideNavBar>
          <Scene key='tab1' title='Add'  component={First} 
          icon={iconProfile}/>
          <Scene key='tab2' title='Grocery' component={Second}
          icon={icon2}/>
          <Scene key='tab3' title='To Do' component={Four}
          icon={icon3}/>
        </Scene>
     
    </Router>
  );
  }
}

