import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  HeaderSpace,
  ListJerseys,
  ListLiga,
} from '../../components';
import {colors, fonts} from '../../utils';
import {dummyLigas} from '../../data';
import {dummyJerseys} from '../../data/dummyJerseys';
import {Jarak, Tombol} from '../../components/kecil';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ligas: dummyLigas,
      jerseys: dummyJerseys,
    };
  }

  render() {
    const {ligas, jerseys} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderSpace />
          <BannerSlider />
          <View style={styles.wrapper}>
            <Text style={styles.text}>Pilih Kategori</Text>
            <ListLiga ligas={ligas} style={styles.content} />
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.text}>
              Pilih <Text style={styles.textBold}>jersey Anda</Text>
            </Text>
            <ListJerseys
              jerseys={jerseys}
              navigation={navigation}
              style={styles.content}
            />

            <Tombol type="textBorder" title="Lihat semua" padding={5} />
          </View>
          <Jarak tinggi={100} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    marginHorizontal: 30,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colors.text,
    marginTop: 15,
    marginBottom: 5,
  },
  textBold: {
    fontFamily: fonts.primary.bold,
  },
  content: {
    marginTop: 15,
  },
});
