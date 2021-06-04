import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import StartButtons from '../components/StartScreen/StartButtons';

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container} accessibilityLabel={`flat-start-menu-view`} testID={`flat-start-menu-view`}>
      <ImageBackground accessibilityLabel={`flat-start-img`} testID={`flat-start-img`}
        source={require('../assets/images/image.jpg')}
        style={styles.image}>
        <Icon accessibilityLabel={`flat-start-menu-icon`} testID={`flat-start-menu-icon`}
          name="menu"
          style={styles.menuButton}
          size={34}
          color="#FFF"
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.titleText} accessibilityLabel={`flat-start-menu-text`} testID={`flat-start-menu-text`}>
          Excellent
          <Text style={[styles.titleText, {color: '#f7ba7b'}]} accessibilityLabel={`flat-start-menu-text2`} testID={`flat-start-menu-text2`}>Flats</Text>
        </Text>
        <StartButtons navigation={navigation} accessibilityLabel={`flat-start-buttons`} testID={`flat-start-buttons`}/>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  menuButton: {
    position: 'absolute',
    top: 15,
    left: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  titleText: {
    color: '#FFF',
    fontSize: 28,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 35,
  },
});

export default StartScreen;
