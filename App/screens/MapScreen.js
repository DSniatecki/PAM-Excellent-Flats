import React from "react";
import AppHeader from "../components/AppHeader";
import MapView, { MAP_TYPES, Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, UrlTile } from "react-native-maps";
import { Dimensions, View } from "react-native";

var { width, height } = Dimensions.get("window");

const MapScreen = ({ flatAds }) => {

  return (<View style={styles.container}>
      <AppHeader screenTitle={"Mapa"} />
      <MapView
        // ref={(map) => (this.currentMap = map)}
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        mapType={MAP_TYPES.STANDARD}
        style={styles.mapcontainer}
        initialRegion={{
          latitude: 51.107883,
          longitude: 17.038538,
          latitudeDelta: 0.6,
          longitudeDelta: 0.3,
        }}
      >
        {
          flatAds.map((flatAd, i) => {
              const { coordinates } = flatAd.location;
              return (<Marker
                key={"marker-" + i}
                coordinate={{
                  latitude: coordinates.latitude,
                  longitude: coordinates.longitude,
                }}
              />);
            },
          )
        }
      </MapView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  mapcontainer: {
    flex: 1,
    width: width,
    height: height,
  },
};

export default MapScreen;
