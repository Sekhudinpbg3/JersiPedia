import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
  tinggiMobile,
} from '../../../utils';

const CardHistory = ({pesanan}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleBold}>{pesanan.tanggalPemesanan}</Text>
      {pesanan.pesanans.map((history, index) => {
        return (
          <View key={index} style={styles.content}>
            <Text style={styles.number}>{index + 1}.</Text>
            <View style={styles.wrapperGambar}>
              <Image source={history.product.gambar[0]} style={styles.gambar} />
            </View>
            <View style={styles.wrapper}>
              <View style={styles.wrapperText}>
                <Text style={styles.titleBold}>{history.product.nama}</Text>
                <Text style={styles.regular}>
                  <Text style={styles.bold}>Harga : </Text>
                  Rp {numberWithCommas(history.product.harga)}
                </Text>
              </View>
              <View style={styles.wrapperText}>
                <Text style={styles.regular}>
                  <Text style={styles.bold}>Qty :</Text>
                  {history.jumlahPesan}
                </Text>
                <Text style={styles.regular}>
                  <Text style={styles.bold}>Total harga : </Text>
                  Rp {numberWithCommas(history.totalHarga)}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
      <View style={styles.contentStatus}>
        <View style={styles.wrapperStatus}>
          <Text style={styles.textStatus}>STATUS:</Text>
          <Text style={styles.textStatus}>ONGKIR (2-3 Hari):</Text>
          <Text style={styles.textStatus}>TOTAL HARGA:</Text>
        </View>
        <View style={styles.wrapperStatus}>
          <Text style={styles.textStatus}>{pesanan.status}</Text>
          <Text style={styles.textStatus}>Rp.{numberWithCommas(18000)}</Text>
          <Text style={styles.textStatus}>Rp.{pesanan.totalHarga}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: 'row',
    marginTop: 5,
  },
  number: {
    fontFamily: fonts.primary.semibold,
    fontSize: RFValue(15, tinggiMobile),
    color: colors.text,
  },
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  wrapperGambar: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: colors.card,
    padding: 5,
    borderRadius: 5,
  },
  wrapperText: {
    marginBottom: 5,
  },
  gambar: {
    width: responsiveWidth(70),
    height: responsiveHeight(80),
  },
  titleBold: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(15, tinggiMobile),
    color: colors.text,
    textTransform: 'capitalize',
  },
  bold: {
    fontFamily: fonts.primary.semibold,
    fontSize: RFValue(14, tinggiMobile),
    color: colors.text,
  },
  regular: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(14, tinggiMobile),
    color: colors.text,
  },
  contentStatus: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 100,
  },
  wrapperStatus: {
    flex: 1,
  },
  textStatus: {
    fontFamily: fonts.primary.semibold,
    fontSize: RFValue(14, tinggiMobile),
    color: colors.primary,
    textTransform: 'uppercase',
    textAlign: 'right',
  },
});
