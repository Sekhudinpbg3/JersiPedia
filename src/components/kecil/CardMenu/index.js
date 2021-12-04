import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconArrowRight} from '../../../assets';
import {colors, fonts, responsiveHeight} from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {tinggiMobile} from '../../../utils/constant';

const CardMenu = ({menu, navigation}) => {
  //parameter untuk menamgkap menu
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(menu.halaman)}>
      <View style={styles.textIcon}>
        {menu.gambar}
        <Text style={styles.text}> {menu.nama} </Text>
      </View>

      <IconArrowRight />
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 30,
    padding: responsiveHeight(20),
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: colors.text,
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(17, tinggiMobile),
    marginLeft: 15,
  },
  textIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
