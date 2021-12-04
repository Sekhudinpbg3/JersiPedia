import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {IconBack, IconKeranjangPutih, IconShoppingCart} from '../../../assets';
import {colors, fonts} from '../../../utils';
import TextBorder from './textBorder';
import TextOnly from './textOnly';
import TextIcon from './textIcon';

const Tombol = props => {
  const Icon = () => {
    if (icon === 'Keranjang') {
      return <IconShoppingCart />;
    } else if (icon === 'arrowLeft') {
      return <IconBack />;
    } else if (icon == 'keranjang putih') {
      return <IconKeranjangPutih />;
    }
    return <IconShoppingCart />;
  };
  const {icon, totalCart, padding, type, onPress, fontSize} = props;
  if (type === 'text') {
    return <TextOnly {...props} />;
  } else if (type === 'textBorder') {
    return <TextBorder {...props} />;
  } else if (type === 'textIcon') {
    return <TextIcon {...props} />;
  }

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />

      {totalCart && (
        <View style={styles.jumlah}>
          <Text style={styles.txJumlah}>{totalCart}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
  }),
  jumlah: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: 'red',
    borderRadius: 4,
    padding: 3,
    alignItems: 'center',
  },
  txJumlah: {
    fontSize: 7,
    color: colors.white,
    fontFamily: fonts.primary.bold,
  },
});
