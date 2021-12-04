import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextOnly = ({padding, title, onPress, fontSize}) => {
  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Text style={styles.text(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextOnly;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.primary,
    padding: padding,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }),
  text: (fontSize)=>( {
    color: colors.white,
    fontFamily: fonts.primary.bold,
    textAlign: 'center',
    fontSize: fontSize,
    fontFamily: fonts.primary.bold,
  }),
});
