import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import Ad from '../components/Ad/Ad';
import AppHeader from '../components/AppHeader';
import FlatsNotFound from '../components/Ad/FlatsNotFound';
import {allFlats} from '../components/data';

const FlatAdListScreen = ({route, navigation}) => {
  const [flats, updateFlats] = useState(allFlats);
  const [filteredFlats, setFilteredFlats] = useState([]);
  const {location, priceFrom, priceTo, surfaceFrom, surfaceTo} = route.params;

  useEffect(() => {
    updateFlats(allFlats);
    setFilteredFlats(filterFlats());
  }, [location, priceFrom, priceTo, surfaceFrom, surfaceTo]);

  const filterFlats = () => {
    return flats.filter(
      f =>
        f.location.city.toLowerCase().includes(location.toLowerCase()) &&
        f.price >= priceFrom &&
        f.price <= priceTo &&
        f.details.surface >= surfaceFrom &&
        f.details.surface <= surfaceTo
    );
  };

  const changeIsFavourite = flat => {
    const newFlatAds = [...flats];
    flat.isFavourite = !flat.isFavourite;
    updateFlats(newFlatAds);
  };

  const renderFlats = flats => {
    if (flats.length === 0) {
      return <FlatsNotFound />;
    } else {
      return (
        <ScrollView>
          {flats.map((flat, i) => (
            <Ad
              key={'favAd-' + i}
              flat={flat}
              changeIsFavourite={() => changeIsFavourite(flat)}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        screenTitle={'Ogłoszenia'}
        navigation={navigation}
        navigationIcon="menu"
      />
      {renderFlats(filteredFlats)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#505050',
  },
});

export default FlatAdListScreen;
