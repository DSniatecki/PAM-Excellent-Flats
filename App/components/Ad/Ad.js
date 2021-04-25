import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import MediaSlider from "./MediaSlider";


const Ad = ({ flat, changeIsFavourite }) => {
  const { isFavourite, title, price, media, details } = flat;
  return (
    <View style={styles.container}>
      <MediaSlider media={media} />
      <View style={styles.section}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.section2}>
          <Text style={styles.header}>{price} zł</Text>
          <Favourite isFavourite={isFavourite} change={changeIsFavourite} />
          <Text style={styles.text}>{details.surface} m2</Text>
        </View>
      </View>
    </View>
  );
};

const Favourite = ({ isFavourite, change }) => {
  if (isFavourite) {
    return <Text style={favouriteStyle} onPress={change}>★</Text>;
  } else {
    return <Text style={notFavouriteStyle} onPress={change}>★</Text>;
  }
};

const favouriteStyle = {
  fontSize: 28,
  color: "#ffdf00",
};

const notFavouriteStyle = {
  fontSize: 28,
  color: "#868686",
};


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#505050",
    },
    section: {
      marginTop: 2,
      marginBottom: 6,
      marginLeft: 10,
      marginRight: 10,
    },
    titleText: {
      fontSize: 18,
      textAlign: "center",
      color: "#ffffff",
    },
    section2: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#f5a22b",
      marginLeft: 5,
    },
    text: {
      marginRight: 5,
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
    },
  },
);


export default Ad;
