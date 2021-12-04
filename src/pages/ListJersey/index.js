import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  HeaderComponent,
  HeaderSpace,
  ListJerseys,
  ListLiga,
} from '../../components';
import {colors, fonts} from '../../utils';
import {dummyLigas} from '../../data';
import {dummyJerseys} from '../../data/dummyJerseys';
import {Jarak} from '../../components/kecil';

export default class ListJersey extends Component {
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.wrapper}>
            <View style={(styles.wrapper, styles.listLiga)}>
              <ListLiga ligas={ligas} style={styles.content} />
            </View>

            <Text style={styles.text}>
              Pilih <Text style={styles.textBold}>jersey Anda</Text>
            </Text>
            <ListJerseys jerseys={jerseys} style={styles.content} navigation={navigation} />
          </View>
          <Jarak tinggi={75} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -15,
  },
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
  listLiga: {
    marginTop: 25,
  },
});
