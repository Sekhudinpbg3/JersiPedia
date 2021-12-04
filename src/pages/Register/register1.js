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
import {CircleRegister1, IlustrasiRegister1} from '../../assets';
import {colors, fonts, responsiveHeight, tinggiMobile} from '../../utils';
import {Jarak, Inputan, Tombol} from '../../components';

export default class Register1 extends Component {
  render() {
    const {navigation} = this.props;
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
                <IlustrasiRegister1 width={220} height={140} />
              </View>
              <View style={styles.wrapperText}>
                <Text style={styles.textBlue}>Registrasi</Text>
                <Text style={styles.textBlue}>-Isi Data Diri Anda-</Text>
                <View style={styles.circle}>
                  <CircleRegister1 />
                </View>
              </View>
              <View style={styles.wrapperCard}>
                <Inputan label="Nama" />
                <Inputan label="Email" />
                <Inputan label="No. Handphone" keyboardType="number-pad" />
                <Inputan label="Password" secureTextEntry />
                <Jarak tinggi={25} />
                <Tombol
                  type="textIcon"
                  icon="arrowRight"
                  title="Continue"
                  padding={10}
                  fontSize={16}
                  onPress={()=>navigation.navigate('Register2')}
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
