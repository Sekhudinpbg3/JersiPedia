import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

//mengimport logo dari folder asser
import {MainLogo, SoccerMan} from '../../assets'; // cukup sampai asset karena pada foldr asset ada file indeks yang mengeksport

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('MainApp');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.mainLogo}>
        <MainLogo width={175} height={114}/>
        <View style={styles.soccerMan}>
          <SoccerMan width={367} height={219}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  soccerMan: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
