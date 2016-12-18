import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import * as firebase from 'firebase';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
    };
  }

  handleEmailInput(input) {
    this.setState({emailValue: input.toLowerCase()});
  }

  handlePasswordInput(input) {
    this.setState({passwordValue: input});
  }

  logIn() {
    firebase.auth()
    .signInWithEmailAndPassword(this.state.emailValue, this.state.passwordValue)
    .then(console.log('log in sent to firebase'))
    .catch((error) => console.log(error.code, error.message))
  }

  render() {
    return (
      <Container>
        <Text>Hello</Text>
        <Content>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                <Input placeholder="EMAIL" autoCapitalize={'none'} onChangeText={(input) => this.handleEmailInput(input)} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="PASSWORD" secureTextEntry onChangeText={(input) => this.handlePasswordInput(input)} />
              </InputGroup>
            </ListItem>
            <Button block onPress={() => this.logIn()}>log in</Button>
          </List>
        </Content>
      </Container>
    );
  }
}
