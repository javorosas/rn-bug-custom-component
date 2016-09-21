import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

class customcomponent extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('customcomponent', () => customcomponent);
