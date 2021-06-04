import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text, Pressable, StyleSheet } from "react-native";

const StartButtons = ({ navigation }) => {
  return (
    <View style={styles.buttonsGroup}>
      <Pressable style={styles.button} accessibilityLabel={`start-button-press`} testID={`start-button-press`}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text accessibilityLabel={`start-button-press-txt`} testID={`start-button-press-txt`} onPress={() => navigation.navigate("Filters")} style={styles.buttonText}>Szukaj </Text>
          <Icon name="search" size={34} color="#FFF" />
        </View>
      </Pressable>
      <Pressable style={styles.button} accessibilityLabel={`start-button-press2`} testID={`start-button-press2`}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text accessibilityLabel={`start-button-press-txt2`} testID={`start-button-press-txt2`} style={styles.buttonText} onPress={() => navigation.navigate("Favourites")}>Ulubione </Text>
          <Icon name="star" size={34} color="#FFF" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: {
    marginBottom: 60,
  },
  button: {
    backgroundColor: "#757575",
    borderRadius: 8,
    width: 300,
    height: 54,
    marginTop: 25,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
});

export default StartButtons;
