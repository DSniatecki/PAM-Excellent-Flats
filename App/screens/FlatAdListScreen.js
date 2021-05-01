import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import Ad from "../components/Ad/Ad";
import AppHeader from "../components/AppHeader";
import FlatsNotFound from "../components/Ad/FlatsNotFound";
import {allFlats} from '../components/data';


const FlatAdListScreen = ({navigation}) => {
  const [flats, setFlats] = useState(allFlats);

  const changeIsFavourite = flat => {
    const newFlatAds = [...flats];
    flat.isFavourite = !flat.isFavourite;
    setFlats(newFlatAds);
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
                navigation={navigation}
              />)
          }
        </ScrollView>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader screenTitle={"Ogłoszenia"} navigation={navigation} navigationIcon="menu"/>
      {
        renderFlats(flats)
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
