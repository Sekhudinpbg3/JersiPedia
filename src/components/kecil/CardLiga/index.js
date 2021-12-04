import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const CardLiga = ({liga}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={liga.gambar} style={styles.content} />
    </TouchableOpacity>
  );
};

export default CardLiga;

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
    borderRadius: 10,
    padding: 5,
    width: responsiveWidth(80),
    height: responsiveHeight(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: responsiveWidth(60),
    height: responsiveHeight(60),
  },
});
