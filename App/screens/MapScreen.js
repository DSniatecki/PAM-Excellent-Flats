import React from "react";
import AppHeader from "../components/AppHeader";
import MapView, { Callout, MAP_TYPES, Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, UrlTile } from "react-native-maps";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { allFlats } from "../components/data";
import WebView from "react-native-webview";

var { width, height } = Dimensions.get("window");
const MapScreen = ({ navigation }) => {
  return (<View style={styles.container} accessibilityLabel={`flat-ad-map-view0`} testID={`flat-ad-map-view0`}>
      <AppHeader screenTitle={"Mapa"} accessibilityLabel={`flat-ad-map-header`} testID={`flat-ad-map-header`}
                 navigation={navigation}
                 navigationIcon="arrow-back" />
      <MapView accessibilityLabel={`flat-ad-map-view2`} testID={`flat-ad-map-view2`}
        // ref={(map) => (this.currentMap = map)}
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        mapType={MAP_TYPES.STANDARD}
        style={styles.mapContainer}
        initialRegion={{
          latitude: 51.107883,
          longitude: 17.038538,
          latitudeDelta: 0.6,
          longitudeDelta: 0.3,
        }}
      >
        {
          allFlats.map((flat, i) => {
              const { title, price, media, details, location } = flat;
              const { coordinates } = location;
              return (<Marker accessibilityLabel={`flat-map-market-${i}-${flat.id}`} testID={`flat-map-market-${i}-${flat.id}`}
                key={"marker-" + i}
                coordinate={{
                  latitude: coordinates.latitude,
                  longitude: coordinates.longitude,
                }}>
                <Callout accessibilityLabel={`flat-map-call-${i}-${flat.id}`} testID={`flat-map-call-${i}-${flat.id}`}  tooltip onPress={() => {
                  navigation.navigate("FlatAd", { flat });
                }} >
                  <View style={styles.miniAd} accessibilityLabel={`flat-map-view-${i}-${flat.id}`} testID={`flat-map-view-${i}-${flat.id}`}>
                    <View style={styles.imageStyle} accessibilityLabel={`flat-map-img-${i}-${flat.id}`} testID={`flat-map-img-${i}-${flat.id}`}>
                    <WebView accessibilityLabel={`flat-map-web-view-${i}-${flat.id}`} testID={`flat-map-web-view-${i}-${flat.id}`}
                             source={{ uri: media.filter(m => m.isMain)[0].uri }} />
                    </View>
                    <Text style={styles.titleText} accessibilityLabel={`flat-map-title-${i}-${flat.id}`} testID={`flat-map-title-${i}-${flat.id}`}>{title}</Text>
                    <View style={styles.section2} accessibilityLabel={`flat-map-sec9-${i}-${flat.id}`} testID={`flat-map-sec9-${i}-${flat.id}`}>
                      <Text style={styles.header} accessibilityLabel={`flat-map-price-${i}-${flat.id}`} testID={`flat-map-price-${i}-${flat.id}`}>{price} zł</Text>
                      <Text style={styles.text} accessibilityLabel={`flat-map-surfac-${i}-${flat.id}`} testID={`flat-map-surfac-${i}-${flat.id}`}>{details.surface} m2</Text>
                    </View>
                  </View>
                </Callout>
              </Marker>);
            },
          )
        }
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    margin: 1,
    width: '99%',
    height: 150,
    overflow: "hidden",
    borderRadius: 8,
    // borderTopLeftRadius: 8
  },
  mapContainer: {
    flex: 1,
    width: width,
    height: height,
  },
  miniAd: {
    backgroundColor: "#505050",
    width: 250,
    borderWidth: 2,
    borderColor: "#383838",
    borderRadius: 10
  },
  titleText: {
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
  },
  section2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f5a22b",
    marginLeft: 5,
  },
  text: {
    marginRight: 5,
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MapScreen;
