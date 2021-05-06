import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import StartScreen from "./screens/StartScreen";
import { DrawerContent } from "./components/DrawerNavigation/DrawerContent";
import FavouritesScreen from "./screens/FavouritesScreen";
import FlatAdListScreen from "./screens/FlatAdListScreen";
import FlatAdScreen from "./screens/FlatAdScreen";
import FiltersScreen from "./screens/FiltersScreen";
import MapScreen from "./screens/MapScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Start"
        drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Start" component={StartScreen} />
        <Drawer.Screen name="FlatsList" component={FlatAdListScreen} />
        <Drawer.Screen name="Favourites" component={FavouritesScreen} />
        <Drawer.Screen name="FlatAd" component={FlatAdScreen} />
        <Drawer.Screen name="Filters" component={FiltersScreen} />
        <Drawer.Screen name="Map" component={MapScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
