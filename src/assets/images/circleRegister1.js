import Svg, {Circle} from 'react-native-svg';
import {responsiveHeight, responsiveWidth} from '../../utils';

import React from 'react';
import {View, Text} from 'react-native';

const circleRegister1 = () => {
  return (
    <Svg
      width= {responsiveHeight(30)}
      height={responsiveHeight(8)}
      viewBox="0 0 40 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="5.5" cy="5.5" r="5.5" fill="#22668A" />
      <Circle cx="34.5" cy="5.5" r="5.5" fill="#C4C4C4" />
    </Svg>
  );
};

export default circleRegister1;
