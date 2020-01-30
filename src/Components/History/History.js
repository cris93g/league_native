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
import axios from 'axios';
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hist: [],
    };
  }
  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
    axios
      .post(`http://192.168.1.77:3001/api/get_history`, {
        id: this.props.match.params.accountId,
      })
      .then(response => {
        if (this._isMounted) {
        this.setState({hist: response.data});
      }
      });
  }
  render() {
    // console.log(this.props.match.params.accountId);
    const {hist} = this.state;
    console.log(hist.teams);
    return (
      <>
        {hist ? (
          <>
  <Text>{hist.gameMode}</Text>
          </>
        ):<Text>Cant get match history</Text>}
      </>
    );
  }
}

export default History;
