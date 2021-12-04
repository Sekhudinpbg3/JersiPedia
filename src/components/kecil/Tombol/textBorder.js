import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextBorder = ({padding, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextBorder;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }),
  text: {
    color: colors.primary,
    fontFamily: fonts.primary.bold,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.bold,
  },
});
