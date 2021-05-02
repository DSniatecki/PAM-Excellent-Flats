import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {allFlats} from '../data';

export const NavLinks = ({navigation}) => {
  const {index, routes} = navigation.dangerouslyGetState();
  const currentRouteName = routes[index].name;
  return (
    <View style={styles.navLinks}>
      <View>
        <Text
          onPress={() => navigation.navigate('Start')}
          style={styles.navText}>
          Start
        </Text>
        {currentRouteName === 'Start' && <View style={styles.underline}></View>}
      </View>
      <View>
        <Text onPress={() => navigation.navigate("Filters")} style={styles.navText}>Szukaj</Text>
        {currentRouteName === 'Search' && (
          <View style={styles.underline}></View>
        )}
      </View>
      <View>
        <Text
          onPress={() => navigation.navigate('Favourites')}
          style={styles.navText}>
          Ulubione
        </Text>
        {currentRouteName === 'Favourites' && (
          <View style={styles.underline}></View>
        )}
      </View>
      <View>
        <Text
          onPress={() => navigation.navigate('FlatsList', {flats: allFlats})}
          style={styles.navText}>
          Mieszkania
        </Text>
        {currentRouteName === 'FlatsList' && (
          <View style={styles.underline}></View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navLinks: {
    flex: 1,
    marginTop: '40%',
    marginLeft: '10%',
  },
  navText: {
    fontSize: 30,
    color: '#FFF',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginTop: '20%',
  },
  underline: {
    marginTop: 6,
    marginLeft: 2,
    height: 2,
    width: '70%',
    backgroundColor: '#FFF',
  },
});
