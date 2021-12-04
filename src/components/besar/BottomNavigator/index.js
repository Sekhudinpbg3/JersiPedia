import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import TabItem from '../TabItem';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import {colors} from '../../../utils';

const MyBottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        //tab items
        return (
          <TabItem
            key={index}
            label={label}
            isFocused={isFocused}
            onLongPress={onLongPress}
            onPress={onPress}
          />
          //     <TouchableOpacity
          //     key={index}
          //     accessibilityRole="button"
          //     accessibilityState={isFocused ? { selected: true } : {}}
          //     onPress={onPress}
          //     onLongPress={onLongPress}
          //     style={{ flex: 1 }}
          //     >
          //     <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          //         {label}
          //     </Text>
          // </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyBottomNavigator;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 35,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    //efek shadow --gogling
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 10,
    justifyContent: 'space-between',
  },
});
