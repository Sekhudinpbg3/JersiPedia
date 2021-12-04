import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  colors,
  fonts,
  tinggiMobile,
  numberWithCommas,
  responsiveHeight,
} from '../../utils';
import {CardAlamat, Pilihan, Tombol} from '../../components';
import {dummyPesanans, dummyProfile} from '../../data';

export default class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
      pesanan: dummyPesanans[0],
      ekspedisi: [],
    };
  }

  render() {
    const {profile, pesanan, ekspedisi} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.textBold}>
              Apakah alamat Anda sudah benar?{' '}
            </Text>
            <CardAlamat profile={profile} />
          </View>
          <View style={styles.contentTotal}>
            <Text style={styles.bold}>Total Harga :</Text>
            <Text style={styles.bold}>
              Rp.{numberWithCommas(pesanan.totalHarga)}
            </Text>
          </View>
          <View style={styles.content}>
            <Pilihan label="Pilih kurir" datas={ekspedisi} fontSize={14} />
          </View>

          <View style={styles.content}>
            <Text style={styles.bold}>Biaya ongkir</Text>
            <View style={styles.contentOngkir}>
              <Text style={styles.regular}>Berat : {pesanan.berat} Kg</Text>
              <Text style={styles.textOngkir}>
                Rp.{numberWithCommas(18000)}
              </Text>
            </View>

            <View style={styles.contentOngkir}>
              <Text style={styles.regular}>Estimasi waktu :</Text>
              <Text style={styles.textOngkir}>2-3 Hari</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentFooter}>
          <View style={styles.textTotal}>
            <Text style={styles.textOngkir}>Total bayar :</Text>
            <Text style={styles.textOngkir}>
              Rp.{numberWithCommas(pesanan.totalHarga + 18000)}
            </Text>
          </View>

          <View style={styles.button}>
            <Tombol
              title="Pembayaran"
              type="textIcon"
              fontSize={RFValue(18, tinggiMobile)}
              padding={responsiveHeight(10)}
              icon="keranjang putih"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  container: {
    marginHorizontal: 30,
  },
  content: {
    marginTop: 20,
  },
  contentTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  contentOngkir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    color: colors.text,
    fontSize: RFValue(18, tinggiMobile),
    marginBottom: 10,
  },
  bold: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(16, tinggiMobile),
    color: colors.text,
    marginBottom: 5,
  },
  regular: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(16, tinggiMobile),
    color: colors.text,
  },
  textOngkir: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(16, tinggiMobile),
    color: colors.text,
  },
  footer: {
    flex: 2,
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
});
