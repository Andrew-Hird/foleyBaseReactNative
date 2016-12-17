import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './components/App.js';

export default class foleyBaseReactNative extends Component {
  render() {
    return (
    <App />
    );
  }
}

AppRegistry.registerComponent('foleyBaseReactNative', () => foleyBaseReactNative);
