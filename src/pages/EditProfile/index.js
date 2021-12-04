import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {dummyProfile} from '../../data';
import {
  colors,
  responsiveHeight,
  tinggiMobile,
  responsiveWidth,
  fonts,
} from '../../utils';
import {Inputan, Pilihan, Tombol} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvinsi: [],
      dataKota: [],
      profile: dummyProfile,
    };
  }

  render() {
    const {dataProvinsi, dataKota, profile} = this.state;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentGambar}>
            <View style={styles.wrapperText}>
              <Text style={styles.textBold}> Foto Profile :</Text>
            </View>
            <Image source={profile.avatar} style={styles.fotoProfil} />
            <View style={styles.changeButton}>
              <Tombol type="textBorder" title="Change" padding={5} />
            </View>
          </View>

          <Inputan
            height={responsiveHeight(40)}
            label="Nama"
            value={profile.nama}
            fontSize={RFValue(16, tinggiMobile)}
          />
          <Inputan
            height={responsiveHeight(40)}
            label="Email"
            value={profile.email}
            fontSize={RFValue(16, tinggiMobile)}
          />
          <Inputan
            height={responsiveHeight(40)}
            label="No. Handphone"
            value={profile.nomerHP}
            fontSize={RFValue(16, tinggiMobile)}
          />
          <Inputan
            textArea
            height={responsiveHeight(40)}
            label="Alamat"
            value={profile.alamat}
            fontSize={RFValue(16, tinggiMobile)}
          />
          <Pilihan
            label="Provinsi"
            datas={dataProvinsi}
            fontSize={RFValue(16, tinggiMobile)}
          />
          <Pilihan
            label="Kabupaten / Kota"
            datas={dataKota}
            fontSize={RFValue(16, tinggiMobile)}
          />

          <View style={styles.submit}>
            <Tombol
              type="textIcon"
              icon="arrowRight"
              title="Submit"
              padding={10}
              fontSize={RFValue(18, tinggiMobile)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  contentGambar: {
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
  },
  fotoProfil: {
    height: responsiveHeight(180),
    width: responsiveWidth(140),
    borderRadius: 40,
  },
  changeButton: {
    alignSelf: 'flex-end',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    color: colors.text,
    fontSize: RFValue(16, tinggiMobile),
  },
  wrapperText: {
    alignSelf: 'flex-start',
  },
  submit: {
    marginVertical: 50,
  },
});
