import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {IconDelete} from '../../../assets';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
  tinggiMobile,
} from '../../../utils';

const CardKeranjang = ({keranjang}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperGambar}>
        <Image source={keranjang.product.gambar[0]} style={styles.gambar} />
      </View>

      <View style={styles.wrapperDetail}>
        <Text style={styles.nama}>{keranjang.product.nama}</Text>
        <Text style={styles.harga}>
          Rp. {numberWithCommas(keranjang.product.harga)}
        </Text>
        <Text style={styles.textBold}>
          Qty: <Text style={styles.regular}>{keranjang.jumlahPesan}</Text>
        </Text>
        <Text style={styles.textBold}>
          Ukuran: <Text style={styles.regular}>{keranjang.ukuran}</Text>
        </Text>
        <Text style={styles.textBold}>
          Total:{' '}
          <Text style={styles.regular}>
            Rp.{numberWithCommas(keranjang.totalHarga)}
          </Text>
        </Text>
        <Text style={styles.textBold}>Keterangan: </Text>
        <Text style={styles.ket}>{keranjang.keterangan}</Text>
      </View>

      <View style={styles.WrapperIcon}>
        <IconDelete style={styles.hapus} />
      </View>
    </View>
  );
};

export default CardKeranjang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 20,
    padding: responsiveHeight(10),
    borderRadius: 10,
    alignItems: 'center',
  },
  wrapperGambar: {
    backgroundColor: colors.card,
    padding: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  wrapperDetail: {
    marginLeft: 20,
  },
  WrapperIcon: {
    marginRight: 10,
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'flex-end',
  },
  gambar: {
    width: responsiveHeight(85),
    height: responsiveHeight(100),
  },
  nama: {
    fontSize: RFValue(15, tinggiMobile),
    fontFamily: fonts.primary.bold,
    color: colors.text,
    textTransform: 'capitalize',
  },
  harga: {
    fontSize: RFValue(12, tinggiMobile),
    fontFamily: fonts.primary.regular,
    color: colors.text,
    marginBottom: 5,
  },
  textBold: {
    fontSize: RFValue(12, tinggiMobile),
    fontFamily: fonts.primary.semibold,
    color: colors.text,
  },
  ket: {
    fontSize: RFValue(12, tinggiMobile),
    fontFamily: fonts.primary.regular,
    color: colors.text,
    marginTop: 5,
  },
  regular: {
    fontSize: RFValue(12, tinggiMobile),
    fontFamily: fonts.primary.regular,
    color: colors.text,
    marginTop: 5,
  },
});
