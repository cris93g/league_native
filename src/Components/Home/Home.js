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
import {Link} from 'react-router-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = text => {
    this.setState({
      username: text,
    });
  };
  render() {
    const {username} = this.state;
    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
          <Image
            style={{width: '100%', height: '30%'}}
            source={require('../../assets/league.jpeg')}
          />
          <TextInput
            name="username"
            onChangeText={this.handleChange}
            style={{height: 50, borderColor: 'gray', borderWidth: 1}}
          />
          <Link to={`/profile/${username}`}>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 'auto',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
                marginRight: 'auto',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 125,
                borderColor: 'gray',
                borderWidth: 0.5,
                backgroundColor: 'lightblue',
              }}>
              Search
            </Text>
          </Link>
        </View>
      </>
    );
  }
}

export default Home;
