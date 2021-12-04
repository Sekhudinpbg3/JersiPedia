import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  CardLiga,
  Inputan,
  Jarak,
  JerseySlider,
  Pilihan,
  Tombol,
} from '../../components';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {tinggiMobile} from '../../utils';

export default class JerseyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jersey: this.props.route.params.jersey,
      images: this.props.route.params.jersey.gambar,
    };
  }

  render() {
    const {navigation} = this.props;
    const {jersey, images} = this.state;

    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Tombol
            icon="arrowLeft"
            padding={5}
            onPress={() => navigation.goBack()}
          />
        </View>
        <JerseySlider images={images} />

        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.liga}>
              <CardLiga liga={jersey.liga} />
            </View>

            <View style={styles.desc}>
              <Text style={styles.nama}>{jersey.nama} </Text>
              <Text style={styles.harga}>
                Harga: Rp. {numberWithCommas(jersey.harga)}{' '}
              </Text>
            </View>
            <View style={styles.garis} />

            <View style={styles.wrapperJenis}>
              <Text style={styles.textRegular}>Jenis : {jersey.jenis}</Text>
              <Text style={styles.textRegular}>Berat : {jersey.berat} Kg</Text>
            </View>

            <View style={styles.wrapperInputPicker}>
              <Inputan
                style={styles.inputanPicker}
                label="Jumlah"
                width={responsiveWidth(160)}
                height={responsiveHeight(30)}
                fontSize={RFValue(16, tinggiMobile)}
              />

              <Pilihan
                style={styles.inputanPicker}
                label="Pilih ukuran"
                datas={jersey.ukuran}
                width={responsiveWidth(160)}
                height={responsiveHeight(30)}
                fontSize={RFValue(16, tinggiMobile)}
              />
            </View>

            <Inputan
              style={styles.textArea}
              textArea
              label="Keterangan"
              placeholder="Tambahkan keterangan lain"
              fontSize={RFValue(16, tinggiMobile)}
            />

            <Jarak tinggi={15} />
            <Tombol
              title="Masukan keranjang"
              type="textIcon"
              icon="keranjang putih"
              padding={responsiveHeight(10)}
              fontSize={RFValue(18, tinggiMobile)}
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
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: responsiveHeight(430),
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  wrapper: {
    marginHorizontal: 30,
  },
  wrapperInputPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  button: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 25,
    zIndex: 1,
  },
  desc: {
    marginVertical: 10,
  },
  wrapperJenis: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  nama: {
    fontSize: RFValue(22, tinggiMobile),
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
    color: colors.text,
  },
  harga: {
    fontSize: RFValue(20, tinggiMobile),
    fontFamily: fonts.primary.light,
  },
  liga: {
    alignItems: 'flex-end',
    marginTop: -responsiveHeight(40),
  },
  garis: {
    borderWidth: 0.3,
    borderColor: 'gray',
  },
  textRegular: {
    fontFamily: fonts.primary.regular,
    color: colors.text,
    fontSize: RFValue(16, tinggiMobile),
  },
  inputanPicker: {},
  textArea: {
    fontSize: RFValue(14, tinggiMobile),
  },
});
