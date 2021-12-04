import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {dummyProfile, dummyMenu} from '../../data';
import {RFValue} from 'react-native-responsive-fontsize';
import {tinggiMobile} from '../../utils/constant';
import {ListMenu} from '../../components';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
      menus: dummyMenu,
    };
  }

  render() {
    const {profile, menus} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.containerAvatar}>
            <Image source={profile.avatar} style={styles.avatar} />
          </View>

          <View style={styles.profile}>
            <Text style={styles.txnama}>{profile.nama}</Text>
            <Text style={styles.text}>
              <Text>No Hp.</Text> {profile.nomerHP}
            </Text>
            <Text style={styles.text}>
              <Text> Email :</Text> {profile.email}
            </Text>
            <Text style={styles.text}>
              {profile.alamat}, {profile.kota}
            </Text>
          </View>

          <View style={styles.wrapperMenu}>
            <ListMenu menus={menus} navigation={navigation} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: responsiveHeight(680),
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  containerAvatar: {
    height: responsiveHeight(155),
    width: responsiveWidth(135),
    backgroundColor: colors.white,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: -responsiveHeight(80),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  wrapperMenu: {
    marginTop: 15,
  },
  avatar: {
    height: responsiveHeight(140),
    width: responsiveWidth(120),
    borderRadius: 20,
  },
  profile: {
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: colors.text,
    fontSize: RFValue(16, tinggiMobile),
    fontFamily: fonts.primary.regular,
  },
  txnama: {
    fontSize: RFValue(24, tinggiMobile),
    fontFamily: fonts.primary.bold,
    color: colors.text,
  },
});
