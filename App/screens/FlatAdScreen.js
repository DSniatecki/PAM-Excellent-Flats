import React, { useCallback, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import MediaSlider from "../components/Ad/MediaSlider";
import AppHeader from "../components/AppHeader";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import SortMenu from "../components/SortMenu";

const WINDOW_WIDTH = Dimensions.get("window").width;
const SLIDER_WIDTH = WINDOW_WIDTH;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 5);

const FlatAdScreen = ({ navigation, route }) => {
  const { flat, setFlats, flats } = route.params;
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const {
    id,
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
    <SafeAreaView style={styles.container} accessibilityLabel={'flat-ad'} testID={'flat-ad'}>
      <AppHeader accessibilityLabel={`flat-ad-app-header`} testID={`flat-ad-app-header`}
        screenTitle={'Ogłoszenie'}
        isFavourite={isFavourite}
        changeIsFavourite={() => {
          flat.isFavourite = !flat.isFavourite;
          forceUpdate();
          const index = flats.findIndex(f => f.id === flat.id);
          flats[index] = flat;
          setFlats([...flats])
        }}
        navigationIcon="arrow-back"
        navigation={navigation}
      />
      <ScrollView style={styles.scrollView}>
        <MediaSlider media={media} height={ITEM_HEIGHT} width={ITEM_WIDTH} accessibilityLabel={`flat-ad-media-slider`} testID={`flat-ad-media-slider`}/>
        <View style={styles.info}  accessibilityLabel={`flat-ad-info-v`} testID={`flat-ad-info-v`}>
          <View style={styles.titleSection} accessibilityLabel={`flat-ad-title-sec-v`} testID={`flat-ad-title-sec-v`}>
            <Text style={styles.titleText} accessibilityLabel={`flat-ad-title`} testID={`flat-ad-title`}>{title}</Text>
            <Text style={styles.price} accessibilityLabel={`flat-ad-price`} testID={`flat-ad-price`}>
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} zł
            </Text>
          </View>
          <Details details={details} location={location} accessibilityLabel={`flat-ad-details-0`} testID={`flat-ad-details-0`}/>
          <Description text={description} accessibilityLabel={`flat-ad-description-0`} testID={`flat-ad-description-0`} />
          <Contact contact={contact} accessibilityLabel={`flat-ad-contact-0`} testID={`flat-ad-contact-0`} />
          <Map location={location} accessibilityLabel={`flat-mini-map`} testID={`flat-ad-mini-map`} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Details = ({ details, location }) => {
  const { marketType, numberOfRooms, surface, constructionYear } = details;
  const { city, district } = location;
  return (
    <>
      <Text style={styles.header} accessibilityLabel={`flat-ad-details-head`} testID={`flat-ad-details-head`} >Szczegóły</Text>
      <View style={styles.row}  accessibilityLabel={`flat-ad-details-row1`} testID={`flat-ad-details-row1`}>
        <Text style={styles.text} accessibilityLabel={`flat-ad-market-type`} testID={`flat-ad-market-type`} >{marketType}</Text>
        <Text style={styles.text} accessibilityLabel={`flat-ad-rooms`} testID={`flat-ad-rooms`}>{`${numberOfRooms} ${
          numberOfRooms > 1 ? 'pokoje' : 'pokój'
        }`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}  accessibilityLabel={`flat-ad-cons-year`} testID={`flat-ad-cons-year`}>{constructionYear}</Text>
        <Text style={styles.text} accessibilityLabel={`flat-ad-surface0`} testID={`flat-ad-surface0`}>{surface} m2</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.boldText} accessibilityLabel={`flat-ad-location0`} testID={`flat-ad-location0`}>{`${city}, ${district}`}</Text>
      </View>
    </>
  );
};

const Description = ({ text }) => (
  <>
    <Text style={styles.header} accessibilityLabel={`flat-ad-description-header`} testID={`flat-ad-description-header`}>Opis</Text>
    <Text style={styles.text} accessibilityLabel={`flat-ad-description0`} testID={`flat-ad-description0`} >{text}</Text>
  </>
);

const Contact = ({ contact }) => {
  const { phoneNumber, email } = contact;
  return (
    <>
      <Text style={styles.header} accessibilityLabel={`flat-ad-contact-header`} testID={`flat-ad-contact-header`} >Kontakt</Text>
      <Text style={styles.boldText}  accessibilityLabel={`flat-ad-contact-phone`} testID={`flat-ad-contact-phone`} > - {phoneNumber}</Text>
      <Text style={styles.boldText} accessibilityLabel={`flat-ad-contact-email`} testID={`flat-ad-contact-email`} > - {email}</Text>
    </>
  );
};
const Map = ({ location }) => {
  const { city, district, coordinates } = location;
  return (
    <>
      <Text style={styles.header} accessibilityLabel={`flat-ad-map-header`} testID={`flat-ad-map-header`} >Mapa</Text>
      <View style={styles.titleSection}>
        {/*<View style={styles.map}>*/}
        {/*  <Image source={require(`../assets/images/map.jpg`)} style={styles.image} />*/}
        {/*</View>*/}
        <MapView accessibilityLabel={`flat-ad-map-view`} testID={`flat-ad-map-view`}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          style={styles.map}>
          <Marker  accessibilityLabel={`flat-ad-map-marker`} testID={`flat-ad-map-marker`}
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
    backgroundColor: '#505050',
  },
  info: {
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  titleSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 24,
    color: '#f5a22b',
    fontWeight: 'bold',
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
    marginTop: 20,
    marginBottom: 5,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'justify',
    marginLeft: 5,
    marginBottom: 2,
    fontSize: 16,
  },
  boldText: {
    color: '#ffffff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: 16,
  },
  map: {
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
