import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CircleRegister2, IlustrasiRegister2} from '../../assets';
import {colors, fonts, tinggiMobile,responsiveHeight} from '../../utils';
import {Jarak, Inputan, Tombol, Pilihan} from '../../components';

export default class Register2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dataProvinsi: [],
             dataKota: []
        }
    }
    
  render() {
    const {navigation} = this.props;
    const {dataProvinsi, dataKota}= this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
              <View style={styles.wrapperIcon}>
                <View style={styles.wrapperTombol}>
                  <Tombol
                    icon="arrowLeft"
                    padding={5}
                    onPress={() => navigation.goBack()}
                  />
                </View>
                <IlustrasiRegister2 width={220} height={140} />
              </View>
              <View style={styles.wrapperText}>
                <Text style={styles.textBlue}>Registrasi</Text>
                <Text style={styles.textBlue}>-Isi Data Alamat Anda-</Text>
                <View style={styles.circle}>
                  <CircleRegister2 />
                </View>
              </View>
              <View style={styles.wrapperCard}>
                <Inputan
                  textArea
                  height={responsiveHeight(40)}
                  label="Alamat"
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
                <Jarak tinggi={25} />
                <Tombol
                  type="textIcon"
                  icon="arrowRight"
                  title="Continue"
                  padding={10}
                  fontSize={16}
                  onPress={()=>navigation.navigate('MainApp')}
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 20,
    paddingTop: 10,
  },
  wrapperIcon: {
    alignItems: 'center',
  },
  wrapperTombol: {
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },
  wrapperText: {
    alignItems: 'center',
    marginTop: 15,
  },
  wrapperCard: {
    marginHorizontal: 25,
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  circle: {
    marginVertical: 40,
  },
  textBlue: {
    color: colors.primary,
    fontSize: RFValue(18, tinggiMobile),
    fontFamily: fonts.primary.bold,
    marginBottom: 3,
  },
});
