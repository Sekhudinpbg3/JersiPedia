import React, {Component} from 'react';
import {Text, StyleSheet, View, Modal} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import ImageViewer from 'react-native-image-zoom-viewer';
import {responsiveHeight, colors, responsiveWidth} from '../../../utils';

export default class JerseySlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openImage: false,
      previewImage: false,
    };
  }

  clickPreview = index => {
    this.setState({
      openImage: true,
      previewImage: [
        {
          url: '',
          props: {
            // Or you can set source directory.
            source: this.props.images[index],
          },
        },
      ],
    });
  };

  render() {
    const {images} = this.props;
    const {openImage, previewImage} = this.state;
    return (
      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={responsiveHeight(500)}
          ImageComponentStyle={styles.jersey}
          dotStyle={styles.dotStyle}
          dotColor={colors.primary}
          imageLoadingColor={colors.white}
          onCurrentImagePressed={index => this.clickPreview(index)}
          circleLoop
        />

        <Modal visible={openImage} transparent={true}>
          <ImageViewer
            imageUrls={previewImage}
            enableSwipeDown
            onSwipeDown={() => this.setState({openImage: false})}
            backgroundColor={colors.card}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  jersey: {
    marginTop: 30,
    width: responsiveWidth(300),
    height: responsiveHeight(400),
  },
  dotStyle: {
    marginTop: -10,
  },
});
