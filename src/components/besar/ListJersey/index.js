import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardJersey} from '../../kecil';

const ListJerseys = ({jerseys, navigation}) => {
  return (
    <View style={styles.container}>
      {jerseys.map(jersey => {
        return (
          <CardJersey key={jersey.id} jersey={jersey} navigation={navigation} />
        );
      })}
    </View>
  );
};

export default ListJerseys;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
