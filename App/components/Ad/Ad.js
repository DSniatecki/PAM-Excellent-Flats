import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import MediaSlider from "./MediaSlider";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Ad = ({ flat, changeIsFavourite, navigation }) => {
  const { isFavourite, price, media, details, location } = flat;
  return (
    <View style={styles.container}>
      <Favourite isFavourite={isFavourite} change={changeIsFavourite}/>
      <MediaSlider style={{position: 'relative'}} media={media} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FlatAd', {flat});
        }}>
        <View style={styles.info}>
          <View style={styles.infoRow}>
            <Text style={styles.price}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} zł</Text>
            <Text style={styles.details}>{details.surface} m2</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.location}>
              {location.city}, {location.district}
            </Text>
            <Text style={styles.details}>{details.numberOfRooms} pokoje</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Favourite = ({isFavourite, change}) => (
  <View style={styles.iconBackground}>
    <Icon
      color="#f5a22b"
      style={styles.icon}
      size={34}
      name={isFavourite ? 'favorite' : 'favorite-border'}
      onPress={() => {
        if (!isFavourite) {
          change();
        } else {
          Alert.alert(
            'Confirmation',
            'Are you sure you want to remove this ad from favourites?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Confirm',
                onPress: () => change(),
                style: 'positive',
              },
            ],
            {
              cancelable: true,
            },
          );
        }
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#505050",
  },
  info: {
    paddingTop: 5,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#f5a22b',
    fontSize: 28,
    fontWeight: '200',
  },
  location: {
    color: '#FFF',
    fontSize: 18,
  },
  details: {
    color: '#FFF',
    fontSize: 18,
  },
  iconBackground: {
    justifyContent:'center', alignItems: 'center', flex: 1,position: 'absolute', zIndex:999, right: 10, top:10, borderRadius: 50,width: 50, height: 50, backgroundColor: "#000"
  }
});

export default Ad;
