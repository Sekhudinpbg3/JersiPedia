import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import Tombol from '../Tombol';

const CardJersey = ({jersey, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('JerseyDetail', {jersey})}>
        <Image style={styles.contentGambar} source={jersey.gambar[0]} />
        <Text style={styles.labelProduk}>{jersey.nama}</Text>
      </TouchableOpacity>

      <Tombol
        type="text"
        title="Detail"
        padding={5}
        onPress={() => navigation.navigate('JerseyDetail', {jersey})}
      />
    </View>
  );
};

export default CardJersey;

const styles = StyleSheet.create({
  contentGambar: {
    height: responsiveHeight(124),
    width: responsiveWidth(124),
  },
  labelProduk: {
    fontSize: 12,
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 5,
    color: colors.text,
  },
  card: {
    backgroundColor: colors.card,
    width: responsiveWidth(140),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container: {
    marginBottom: 20,
  },
});
