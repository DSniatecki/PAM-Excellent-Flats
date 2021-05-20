import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Ad from "../components/Ad/Ad";
import AppHeader from "../components/AppHeader";
import FlatsNotFound from "../components/Ad/FlatsNotFound";
import { allFlats } from "../components/data";


const FavouritesScreen = ({ navigation, route }) => {
  const [flats, updateFlats] = useState(allFlats);

  const changeIsFavourite = flat => {
    const newFlatAds = [...flats];
    flat.isFavourite = !flat.isFavourite;
    updateFlats(newFlatAds);
  };

  const favouriteFlats = flats.filter(flat => flat.isFavourite);

  const renderFlats = (favouriteFlats) => {
    if (favouriteFlats.length === 0) {
      return (<FlatsNotFound />);
    } else {
      return (
        <ScrollView>
          {favouriteFlats.map((flat, i) => (
            <Ad
              key={'favAd-' + i}
              flat={flat}
              changeIsFavourite={() => changeIsFavourite(flat)}
              navigation={navigation}
              flats={favouriteFlats}
              setFlats={updateFlats}
            />
          ))}
        </ScrollView>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader screenTitle={"Ulubione"}
                 navigation={navigation}
                 navigationIcon="arrow-back" />
      {
        renderFlats(favouriteFlats)
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


export default FavouritesScreen;
