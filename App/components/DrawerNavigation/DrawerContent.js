import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {NavLinks} from './NavLinks';

export const DrawerContent = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.blackRectangle}></View>
      <View style={styles.navigation}>
        <Icon
          style={styles.closeIcon}
          name="close"
          size={34}
          color="#FFF"
          onPress={() => navigation.closeDrawer()}
        />
        <NavLinks navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  blackRectangle: {
    backgroundColor: '#000',
    width: '20%',
    height: '100%',
  },
  navigation: {
    flex: 1,
    backgroundColor: '#262626',
    width: '80%',
    height: '100%',
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
});
