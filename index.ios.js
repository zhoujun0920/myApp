/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'

var SearchPage = require('./SearchPage');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class myApp extends Component {
  render() {
    return (
      <NavigatorIOS
              style={styles.container}
              initialRoute={{
                title: 'Property Finder',
                component: SearchPage,
              }}/>
    );
  }
}

class HomeView extends Component {
  render() {
    return (
      <Text style={styles.text}>
        Hello World!
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
});

AppRegistry.registerComponent('myApp', () => myApp);
