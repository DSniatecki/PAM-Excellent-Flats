import { StyleSheet, Text, View } from "react-native";
import React from "react";


const FlatsNotFound = () => {
  return (
    <View style={styles.container} accessibilityLabel={`ad-404-con`} testID={`ad-404-con`}>
      <Text style={styles.sign}>{"☹"}</Text>
      <Text style={styles.text} accessibilityLabel={`ad-404-text`} testID={`ad-404-text`} >{"Nie znaleziono ogłoszeń"}</Text>
    </View>
  );
};


const styles = StyleSheet.create(
  {
    container: {
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 80,
    },
    sign: {
      fontSize: 67,
      color: "#c9c9c9",
    },
    text: {
      fontSize: 27,
      color: "#c9c9c9",
    },
  },
);

export default FlatsNotFound;
