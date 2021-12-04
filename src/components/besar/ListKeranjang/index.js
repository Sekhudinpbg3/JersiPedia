import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardKeranjang, Jarak} from '../../kecil';

const ListKeranjang = ({keranjangs}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {keranjangs.map(keranjang => {
          return <CardKeranjang keranjang={keranjang} key={keranjang.id} />;
        })}
      </View>

      <Jarak tinggi={100} />
    </ScrollView>
  );
};

export default ListKeranjang;

const styles = StyleSheet.create({});
