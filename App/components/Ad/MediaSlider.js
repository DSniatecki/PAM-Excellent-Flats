import { Dimensions, Image, View } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import Video from "react-native-video";

const WINDOW_WIDTH = Dimensions.get("window").width;
const HEIGHT = WINDOW_WIDTH * 3 / 5;

const MediaSlider = ({ media, width, height }) => {
  const itemContainerStyle = {
    width: width != null ? width : WINDOW_WIDTH,
    height: height != null ? height : HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  };

  const renderItem = ({ item, index }) => {
    const { type, uri } = item;
    if (type === "image") {
      return (
        <View style={itemContainerStyle}>
          <Image source={{ uri: uri }} style={imageStyle}  accessibilityLabel={`ad-photo-${index}-${uri}`} testID={`ad-photo-${index}-${uri}`}/>
        </View>
      );
    } else {
      return (
        <View style={itemContainerStyle}>
          <Video source={{ uri: uri }}
                 javaScriptEnabled={true}
                 domStorageEnabled={true}
                  />
        </View>
      );
    }
  };
return (
    <View>
    <Carousel
        accessibilityLabel={`ad-carousel`} testID={`ad-carousel`}
      // ref={(c) => { this._carousel = c; }}
      data={media}
      layout={"default"}
      renderItem={renderItem}
      sliderWidth={WINDOW_WIDTH}
      itemWidth={width != null ? width : WINDOW_WIDTH}
      useScrollView={true}
    />
</View>
);
}
;

const imageStyle = {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

export default MediaSlider;
