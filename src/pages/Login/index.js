import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {MainLogo, SoccerMan} from '../../assets';
import {colors, fonts, responsiveHeight, tinggiMobile} from '../../utils';
import {Inputan, Jarak, Tombol} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Login extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.page}>
            <View style={styles.wrapperLogo}>
              <MainLogo width={175} height={100} />
            </View>
            <View style={styles.wrapperCard}>
              <Inputan label="Email" />
              <Inputan label="Password" secureTextEntry />
              <Jarak tinggi={25} />
              <Tombol type="text" title="Login" padding={10} fontSize={16} />
            </View>
            <View style={styles.wrapperText}>
              <Text style={styles.textBlack}> Belum punya akun?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register1')}>
                <Text style={styles.textBlue}>Daftar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.wrapperIlustrasi}>
              <SoccerMan width={328} height={196} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapperLogo: {
    alignItems: 'center',
    marginTop: responsiveHeight(60),
  },
  wrapperCard: {
    marginHorizontal: 25,
    marginVertical: 10,
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
  wrapperText: {
    flexDirection: 'row',
    marginHorizontal: 100,
    marginVertical: 25,
    alignItems: 'center',
  },
  wrapperIlustrasi: {
    marginHorizontal: 80,
    borderBottomColor: 'gray',
    borderBottomWidth: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  textBlack: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(18, tinggiMobile),
    color: colors.text,
  },
  textBlue: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(18, tinggiMobile),
    color: colors.primary,
    marginLeft: 5,
  },
});
