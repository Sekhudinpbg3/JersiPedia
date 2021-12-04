import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, responsiveHeight} from '../../../utils';

const HeaderSpace = () => {
  return <View style={styles.container}></View>;
};

export default HeaderSpace;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary, //'#22668D',
    height: responsiveHeight(40),
  },
});
