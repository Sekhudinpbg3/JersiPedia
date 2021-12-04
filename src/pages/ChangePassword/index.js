import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  colors,
  fonts,
  responsiveHeight,
  responsiveWidth,
  tinggiMobile,
} from '../../utils';
import {dummyProfile} from '../../data';
import {Inputan, Tombol} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
    };
  }
  render() {
    const {profile} = this.state;
    return (
      <View style={styles.page}>
        <View>
          <Inputan
            secureTextEntry
            height={responsiveHeight(40)}
            label="Password lama"
            fontSize={RFValue(16, tinggiMobile)}
          />
          <Inputan
            secureTextEntry
            height={responsiveHeight(40)}
            label="Password baru"
            fontSize={RFValue(16, tinggiMobile)}
          />
          <Inputan
            secureTextEntry
            height={responsiveHeight(40)}
            label="Konfirmasi password"
            fontSize={RFValue(16, tinggiMobile)}
          />
        </View>
        <View style={styles.submit}>
          <Tombol
            type="textIcon"
            icon="arrowRight"
            title="Submit"
            padding={10}
            fontSize={RFValue(18, tinggiMobile)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  submit: {
    marginVertical: 50,
  },
});
