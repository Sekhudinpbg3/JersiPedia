import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Inputan = ({
  textArea,
  label,
  width,
  height,
  fontSize,
  placeholder,
  value,
  secureTextEntry,
  keyboardType,
}) => {
  if (textArea) {
    return (
      <View style={styles.container}>
        <Text style={styles.label(fontSize)}>{label} :</Text>
        <TextInput
          style={styles.inputTextArea(fontSize)}
          multiline={true}
          numberOfLines={3}
          value={value}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <TextInput
        style={styles.input(width, height, fontSize)}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text,
  }),
  input: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 14,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 3,
    paddingHorizontal: 10,
  }),
  inputTextArea: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  }),
});
