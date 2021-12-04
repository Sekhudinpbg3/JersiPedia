import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {dummyPesanans} from '../../data';
import {ListKeranjang, Tombol} from '../../components';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  tinggiMobile,
} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Keranjang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pesanan: dummyPesanans[0],
    };
  }

  render() {
    const {pesanan} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ListKeranjang keranjangs={pesanan.pesanans} />

        <View style={styles.contentFooter}>
          <View style={styles.textTotal}>
            <Text style={styles.text}>Total Harga :</Text>
            <Text style={styles.text}>
              Rp.{numberWithCommas(pesanan.totalHarga)}
            </Text>
          </View>

          <View style={styles.button}>
            <Tombol
              title="Check Out"
              type="textIcon"
              fontSize={RFValue(18, tinggiMobile)}
              padding={responsiveHeight(10)}
              icon="keranjang putih"
              onPress={() => navigation.navigate('Checkout')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentFooter: {
    paddingHorizontal: 25,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 15,
  },
  textTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    marginBottom: 20,
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(16, tinggiMobile),
    color: colors.text,
  },
});
