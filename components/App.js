import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';

import Landing from './Landing';
import FoleyBase from './FoleyBase';

const firebaseConfig = {
    apiKey: "AIzaSyDT0ea2htcQQVIWZhlMX__W2TQppbIZBqk",
    authDomain: "foley-base.firebaseapp.com",
    databaseURL: "https://foley-base.firebaseio.com",
    storageBucket: "foley-base.appspot.com",
    messagingSenderId: "298210345746"
  };
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('user signed in: ', user);
  } else {
    console.log('no user signed in');
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }

  componentWillMount() {
    firebase.auth()
    .onAuthStateChanged((user) => {
      if (user) {
        this.setState({signedIn: true})
      }
      else {
        this.setState({signedIn: false})
      }
    })
  }

  render() {
    return (
      this.state.signedIn ? <FoleyBase /> : <Landing />
      // <Landing />
    );
  }
}
