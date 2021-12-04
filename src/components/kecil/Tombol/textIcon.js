import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  IconBack,
  IconKeranjangPutih,
  IconShoppingCart,
  IconSubmitArrow,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TextIcon = ({icon, padding, onPress, title, fontSize}) => {
  const Icon = () => {
    if (icon === 'Keranjang') {
      return <IconShoppingCart />;
    } else if (icon === 'arrowLeft') {
      return <IconBack />;
    } else if (icon === 'keranjang putih') {
      return <IconKeranjangPutih />;
    } else if (icon === 'arrowRight') {
      return <IconSubmitArrow />;
    }
    return <IconShoppingCart />;
  };

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />
      <Text style={styles.text(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.primary,
    padding: padding,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: fontSize => ({
    marginLeft: 5,
    color: colors.white,
    fontFamily: fonts.primary.bold,
    fontSize: fontSize ? fontSize : 15,
  }),
});
