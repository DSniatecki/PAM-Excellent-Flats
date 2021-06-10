import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import Ad from '../components/Ad/Ad';
import AppHeader from '../components/AppHeader';
import FlatsNotFound from '../components/Ad/FlatsNotFound';
import {allFlats} from '../components/data';
import SortMenu from "../components/SortMenu"
import {Provider} from 'react-native-paper';

const FlatAdListScreen = ({route, navigation}) => {
  const [flats, updateFlats] = useState(allFlats);
  const [filteredFlats, setFilteredFlats] = useState([]);
  const {location, priceFrom, priceTo, surfaceFrom, surfaceTo, forRental, forSale} = route.params;

  useEffect(() => {
    updateFlats(allFlats);
    setFilteredFlats(filterFlats());
  }, [location, priceFrom, priceTo, surfaceFrom, surfaceTo, forRental, forSale]);

  const sortByPriceDesc = () => {
    const sortedFlats = filteredFlats.sort((a, b) => a.price < b.price);
    setFilteredFlats([...sortedFlats])
  }

  const sortByPriceAsc = () => {
    const sortedFlats = filteredFlats.sort((a, b) => b.price < a.price);
    setFilteredFlats([...sortedFlats])
  }
  const sortBySurfaceDesc = () => {
    const sortedFlats = filteredFlats.sort((a, b) => a.details.surface < b.details.surface);
    setFilteredFlats([...sortedFlats])
  }

  const filterFlats = () => {
    let listedFlats = flats.filter(
    f =>
      f.location.city.toLowerCase().includes(location.toLowerCase()) &&
      f.price >= priceFrom &&
      f.price <= priceTo &&
      f.details.surface >= surfaceFrom &&
      f.details.surface <= surfaceTo
    );

    if (forRental === true)
      return listedFlats.filter(f => f.forRental === forRental)
    else if (forSale === true)
        return listedFlats.filter(f => f.forSale === forSale);
  };

  const changeIsFavourite = flat => {
    const newFlatAds = [...flats];
    flat.isFavourite = !flat.isFavourite;
    updateFlats(newFlatAds);
  };

  const renderFlats = flats => {
    if (flats.length === 0) {
      return <FlatsNotFound accessibilityLabel={`flats-not-found`} testID={`flats-not-found`}/>;
    } else {
      return (
          <ScrollView>
            {flats.map((flat, i) => (
              <Ad accessibilityLabel={`flat-list-ad-${i}--${flat.id}`} testID={`flat-list-ad-${i}--${flat.id}`}
                orderId={i}
                key={'favAd-' + i}
                flat={flat}
                flats={filteredFlats}
                setFlats={setFilteredFlats}
                changeIsFavourite={() => changeIsFavourite(flat)}
                navigation={navigation}
              />
            ))}
          </ScrollView>
      );
    }
  };

  return (
    <Provider>
      <SafeAreaView style={styles.container} accessibilityLabel={`flat-ads-header`} testID={`flat-ads-header`}>
        <AppHeader accessibilityLabel={`flat-ads-header2`} testID={`flat-ads-header2`}
          screenTitle={'Ogłoszenia'}
          navigation={navigation}
          navigationIcon="menu"
          sortMenu={<SortMenu
              accessibilityLabel={`flat-ads-sort-menu`} testID={`flat-ads-sort-menu`}
              sortByPriceDesc={sortByPriceDesc} sortByPriceAsc={sortByPriceAsc} sortBySurfaceDesc={sortBySurfaceDesc}/>}
        />
        {renderFlats(filteredFlats)}
      </SafeAreaView>
    </Provider>
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
