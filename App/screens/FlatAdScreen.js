import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import MediaSlider from '../components/Ad/MediaSlider';
import AppHeader from '../components/AppHeader';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import MapView, { MAP_TYPES, UrlTile } from "react-native-maps";

const WINDOW_WIDTH = Dimensions.get('window').width;
const SLIDER_WIDTH = WINDOW_WIDTH;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.86);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const FlatAdScreen = ({navigation, route, updateFlat}) => {
  const {flat} = route.params;
  const {
    isFavourite,
    title,
    price,
    media,
    details,
    description,
    contact,
    location,
  } = flat;
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        screenTitle={'Ogłoszenie'}
        isFavourite={isFavourite}
        changeIsFavourite={() => {
          flat.isFavourite = !flat.isFavourite;
          updateFlat(flat);
        }}
        navigationIcon="arrow-back"
        navigation={navigation}
      />
      <ScrollView style={styles.scrollView}>
        <MediaSlider media={media} height={ITEM_HEIGHT} width={ITEM_WIDTH} />
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.header}>{`${price} zł`}</Text>
        </View>
        <Details details={details} location={location} />
        <Description text={description} />
        <Contact contact={contact} />
        <Map location={location} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Details = ({details, location}) => {
  const {marketType, numberOfRooms, surface, constructionYear} = details;
  const {city, district} = location;
  return (
    <>
      <Text style={styles.header}>Szczegóły</Text>
      <View style={styles.row}>
        <Text style={styles.boldText}>{marketType}</Text>
        <Text style={styles.boldText}>{`${numberOfRooms} ${
          numberOfRooms > 1 ? 'pokoje' : 'pokój'
        }`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.boldText}>{`${city}, ${district}`}</Text>
        <Text style={styles.boldText}>{surface} m2</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.boldText}>{constructionYear}</Text>
      </View>
    </>
  );
};
const Description = ({text}) => (
  <>
    <Text style={styles.header}>Opis</Text>
    <Text style={styles.text}>{text}</Text>
  </>
);

const Contact = ({contact}) => {
  const {phoneNumber, email} = contact;
  return (
    <>
      <Text style={styles.header}>Kontakt</Text>
      <Text style={styles.boldText}> - {phoneNumber}</Text>
      <Text style={styles.boldText}> - {email}</Text>
    </>
  );
};
const Map = ({location}) => {
  const {city, district, coordinates} = location;
  return (
    <>
      <Text style={styles.header}>Mapa</Text>
      <View style={styles.titleSection}>
        {/*<View style={styles.map}>*/}
        {/*  <Image source={require(`../assets/images/map.jpg`)} style={styles.image} />*/}
        {/*</View>*/}
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          style={styles.map}>
          <Marker
            coordinate={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
            }}
          />
        </MapView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#757575',
  },
  scrollView: {},
  titleSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f5a22b',
    marginLeft: 5,
  },
  text: {
    color: '#ffffff',
    margin: 5,
  },
  boldText: {
    color: '#ffffff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  map: {
    marginTop: 10,
    marginBottom: 10,
    width: WINDOW_WIDTH * 0.95,
    height: WINDOW_WIDTH * 0.5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  row: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default FlatAdScreen;
