import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import Ad from '../components/Ad/Ad';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AppHeader = ({
  screenTitle,
  isFavourite,
  changeIsFavourite,
  navigation,
  navigationIcon,
}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={navigationIcon}
        style={styles.icon}
        size={34}
        color="#FFF"
        onPress={() => {
          if (navigationIcon === "menu")
            navigation.openDrawer();
          else
            navigation.goBack()
        }}
      />
      <Text style={styles.title}>{screenTitle}</Text>
      {isFavourite != null ? (
        <Favourite
          isFavourite={isFavourite}
          changeIsFavourite={changeIsFavourite}
        />
      ) : (
        <Text />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: '#383838',
  },
  icon: {
    fontWeight: 'bold',
    fontSize: 34,
    color: '#d1d1d1',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5a22b',
  },
  favourite: {
    marginRight: 15,
  },
});

const Favourite = ({isFavourite, changeIsFavourite}) => {
  if (isFavourite) {
    return (
      <Text style={favouriteStyle} onPress={changeIsFavourite}>
        ★
      </Text>
    );
  } else {
    return (
      <Text style={notFavouriteStyle} onPress={changeIsFavourite}>
        ★
      </Text>
    );
  }
};

const favouriteStyle = {
  fontSize: 28,
  color: '#ffdf00',
};

const notFavouriteStyle = {
  fontSize: 28,
  color: '#868686',
};

export default AppHeader;
