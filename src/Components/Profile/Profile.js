import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import axios from 'axios';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: [],
    };
  }
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    axios
      .post(`http://192.168.1.77:3001/api/get_summoner`, {
        name: this.props.match.params.user,
      })
      .then(response => {
        if (this._isMounted) {
          this.setState({summoner: response.data});
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const {summoner} = this.state;

    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          {summoner ? (
            <>
              <Image
                style={{width: 150, height: 150, borderRadius: 25}}
                source={{
                  uri: `http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${summoner.profileIconId}.png`,
                }}
              />
              {summoner.tier == `BRONZE` ? (
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../icons/Emblem_Bronze.png')}
                />
              ) : summoner.tier == `SILVER` ? (
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 50,
                  }}
                  source={require('../../icons/Emblem_Silver.png')}
                />
              ) : summoner.tier == `GOLD` ? (
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../icons/Emblem_Gold.png')}
                />
              ) : summoner.tier == `PLATINUM` ? (
                <Image
                  sstyle={{width: 50, height: 50}}
                  source={require('../../icons/Emblem_Platinum.png')}
                />
              ) : summoner.tier == `DIAMOND` ? (
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../icons/Emblem_Diamond.png')}
                />
              ) : summoner.tier == `MASTER` ? (
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../icons/Emblem_Master.png')}
                />
              ) : summoner.tier == `GRANDMASTER` ? (
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../icons/Emblem_Grandmaster.png')}
                />
              ) : summoner.tier == `CHALLENGER` ? (
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../icons/Emblem_Challenger.png')}
                />
              ) : (
                <Text>sorry no rank</Text>
              )}
              <Text
                style={{
                  fontSize: 20,
                }}>{`lv: ${summoner.summonerLevel}`}</Text>
              <Text>{`Username: ${summoner.summonerName}`}</Text>
              <Text>{`wins: ${summoner.wins}`}</Text>
              <Text>{`looses: ${summoner.losses}`}</Text>
            </>
          ) : (
            <Text>no username found</Text>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
          <Text
            style={{
              display: 'flex',
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
            Match History
          </Text>
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
            In Game
          </Text>
        </View>
      </>
    );
  }
}

export default Profile;
