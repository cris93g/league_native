import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Image,
} from 'react-native';
class InGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [],
    };
  }
  render() {
    return (
      <>
        <Text>ingame</Text>
      </>
    );
  }
}

export default InGame;
