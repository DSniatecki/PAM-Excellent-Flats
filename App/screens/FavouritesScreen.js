import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Ad from "../components/Ad/Ad";
import AppHeader from "../components/AppHeader";
import FlatsNotFound from "../components/Ad/FlatsNotFound";


const FavouritesScreen = ({ flatAds, updateFlats }) => {

  const changeIsFavourite = flat => {
    const newFlatAds = [...flatAds];
    flat.isFavourite = !flat.isFavourite;
    updateFlats(newFlatAds);
  };

  const favouriteFlats = flatAds.filter(flat => flat.isFavourite);

  const renderFlats = (favouriteFlats) => {
    if (favouriteFlats.length === 0) {
      return (<FlatsNotFound />);
    } else {
      return (
        <ScrollView>
          {
            favouriteFlats
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
      <AppHeader screenTitle={"Ulubione"} />
      {
        renderFlats(favouriteFlats)
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      marginTop: 5,
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#505050",
    },
  },
);


export default FavouritesScreen;
