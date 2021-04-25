import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Ad from "../components/Ad/Ad";
import AppHeader from "../components/AppHeader";
import FlatsNotFound from "../components/Ad/FlatsNotFound";


const FlatAdListScreen = ({ flatAds, updateFlats }) => {

  const changeIsFavourite = flat => {
    const newFlatAds = [...flatAds];
    flat.isFavourite = !flat.isFavourite;
    updateFlats(newFlatAds);
  };

  const renderFlats = (flats) => {
    if (flats.length === 0) {
      return (<FlatsNotFound />);
    } else {
      return (
        <ScrollView style={{ marginTop: 5, marginBottom: 5}}>
          {
            flats
              .map((flat, i) => <Ad
                key={"favAd-" + i}
                flat={flat}
                changeIsFavourite={() => changeIsFavourite(flat)}
              />)
          }
        </ScrollView>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader screenTitle={"Ogłoszenia"} />
      {
        renderFlats(flatAds)
      }

    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#505050",
    },
  },
);


export default FlatAdListScreen;
