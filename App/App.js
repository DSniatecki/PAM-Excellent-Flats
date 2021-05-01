import React, {Node, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import StartScreen from './screens/StartScreen';
import {DrawerContent} from './components/DrawerNavigation/DrawerContent';
import FavouritesScreen from './screens/FavouritesScreen';
import FlatAdListScreen from './screens/FlatAdListScreen';
import FlatAdScreen from './screens/FlatAdScreen';
import {allFlats} from './components/data';

const Drawer = createDrawerNavigator();

const App = () => {
  const [flats, setFlats] = useState(allFlats);
  // return (
  // // <MapScreen flatAds={flats} />
  // // <FlatAdListScreen flatAds={flats} updateFlats={setFlats} />
  // // <FavouritesScreen flatAds={flats} updateFlats={setFlats} />
  // <FlatAdScreen flat={flats[0]} updateFlat={(newFlat) => {
  //     const newFlats = [...flats];
  //     newFlats[0] = newFlat;
  //     setFlats(newFlats);
  // }} />

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Start"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Start" component={StartScreen} />
        <Drawer.Screen name="FlatsList" component={FlatAdListScreen} />
        <Drawer.Screen name="Favourites" component={FavouritesScreen} />
        <Drawer.Screen name="FlatAd" component={FlatAdScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
