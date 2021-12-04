import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconJersey,
  IconJerseyActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    } else if (label === 'Jersey') {
      return isFocused ? <IconJerseyActive /> : <IconJersey />;
    } else {
      return isFocused ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconHome />;
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary, //import 'colors' tetapi menggunakan kata kunci 'Colors'
    fontSize: 11,
    marginTop: 1,
    fontFamily: fonts.primary.bold,
  }),
});
