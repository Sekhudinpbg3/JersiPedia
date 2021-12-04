import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {responsiveHeight} from '../../../utils';
import {IconSearch} from '../../../assets';
import {Tombol, Jarak} from '../../kecil';
import {colors, fonts} from '../../../utils';

export default class HeaderComponent extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        {/* untuk inpuut cari */}
        <View style={styles.wrapper}>
          <View style={styles.searchSection}>
            <IconSearch style={styles.iconCari} />
            <TextInput placeholder="Search ..." style={styles.textInput} />
          </View>

          <Jarak lebar={10} />
          <Tombol
            icon="Keranjang"
            totalCart={12}
            padding={3}
            onPress={() => navigation.navigate('Keranjang')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary, //'#22668D',
    height: responsiveHeight(70),
  },
  wrapper: {
    marginTop: 15,
    marginHorizontal: 25,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 14,
    padding: 2,
    backgroundColor: colors.white,
    fontFamily: fonts.primary.regular,
    color: 'black',
  },
  iconCari: {
    marginLeft: 10,
  },
});
