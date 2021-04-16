/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Node} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import StartScreen from './screens/StartScreen';
import { DrawerContent } from './components/DrawerNavigation/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Start" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Start" component={StartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
