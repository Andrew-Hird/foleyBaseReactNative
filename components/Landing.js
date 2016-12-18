import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Icon} from 'native-base';
import * as firebase from 'firebase';

import Login from './Login';
import SignUp from './SignUp';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpPressed: false
    };
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'tomato'}}>
          <Title>Foley Base</Title>
        </Header>
        <Content>
          {this.state.signUpPressed ? <SignUp /> :
            <Content>
                <Login />
                <Button block onPress={() => this.setState({signUpPressed: true})} info>sign up</Button>
            </Content>
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
