import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Icon} from 'native-base';
import * as firebase from 'firebase';

export default class FoleyBase extends Component {

  logout() {
    firebase.auth()
    .signOut()
    .then(console.log('sign out pressed'))
    .catch((error) => console.log(error.code, error.message))
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'tomato'}}>
          <Title>Foley Base</Title>
        </Header>
          <Content>
            <Button block info onPress={() => this.logout()}>sign out</Button>
          </Content>
      </Container>
    );
  }
}
