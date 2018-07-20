/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Router from './Router';
import SplashScreen from 'react-native-splash-screen'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

export default class App extends Component{
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
       </Provider> 
  );
  }
}


