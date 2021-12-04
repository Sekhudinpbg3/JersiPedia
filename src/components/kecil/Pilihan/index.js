import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors, responsiveHeight, tinggiMobile} from '../../../utils';
import {Picker} from '@react-native-picker/picker';

const Pilihan = ({label, datas, width, height, fontSize}) => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <View style={styles.wrapperPicker}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker(width, height)}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item style={styles.textList(fontSize)} label={label} />
          {datas.map((item, index) => {
            return (
              <Picker.Item
                style={styles.textList(fontSize)}
                label={item}
                value={item}
                key={index}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

export default Pilihan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  wrapperPicker: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.semibold,
    color: colors.text,
  }),
  picker: (width, height) => ({
    fontColor: 'black',
    width: width,
    height: height ? height : responsiveHeight(40, tinggiMobile),
  }),
  textList: fontSize => ({
    fontSize: fontSize,
    fontFamily: fonts.primary.regular,
  }),
});
