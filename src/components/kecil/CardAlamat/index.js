import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors, fonts, tinggiMobile} from '../../../utils';

const CardAlamat = ({profile}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Alamat Saya :</Text>
      <Text style={styles.text}>{profile.alamat}</Text>
      <Text style={styles.text}>Kota : {profile.kota}</Text>
      <Text style={styles.text}>Provinsi : {profile.provinsi}</Text>

      <TouchableOpacity>
        <Text style={styles.ubah}>Ubah alamat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAlamat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
  },
  bold: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(16, tinggiMobile),
    color: colors.text,
    marginBottom: 5,
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(16, tinggiMobile),
    color: colors.text,
  },
  ubah: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(16, tinggiMobile),
    color: colors.primary,
    textAlign: 'right',
    marginTop: 10,
  },
});
