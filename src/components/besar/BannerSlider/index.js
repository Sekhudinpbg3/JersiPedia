import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Slider1, Slider2} from '../../../assets';
import {SliderBox} from 'react-native-image-slider-box';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Slider1, Slider2],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          autoplay
          sliderBoxHeight={responsiveHeight(132)}
          ImageComponentStyle={styles.slider}
          dotStyle={styles.dotStyle}
          dotColor={colors.primary}
          imageLoadingColor={colors.white}
          circleLoop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
  },
  slider: {
    borderRadius: 10,
    width: responsiveWidth(364),
  },
  dotStyle: {
    width: 10,
    height: 5,
    borderRadius: 5,
  },
});
