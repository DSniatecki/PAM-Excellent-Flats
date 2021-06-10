import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const AppHeader = ({
                     screenTitle,
                     isFavourite,
                     changeIsFavourite,
                     navigation,
                     navigationIcon,
                     sortMenu
                   }) => {
  return (
    <View style={styles.container} accessibilityLabel={`app-header`} testID={`app-header`}>
      <Icon accessibilityLabel={`app-header-icon`} testID={`app-header-icon`}
        name={navigationIcon}
        style={styles.icon}
        size={34}
        onPress={() => {
          if (navigationIcon === 'menu') navigation.openDrawer();
          else navigation.goBack();
        }}
      />
      <Text style={styles.title} accessibilityLabel={`app-header-text`} testID={`app-header-text`} >{screenTitle}</Text>
      {isFavourite != null && (
        <Favourite accessibilityLabel={`app-header-favour`} testID={`app-header-favour`}
          isFavourite={isFavourite}
          changeIsFavourite={changeIsFavourite}
        />
      )}
      {(isFavourite == null && !sortMenu) && <Text style={{width: 50}}/>}
      {sortMenu}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 7,
    paddingTop: 7,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: "#383838"
  },
  icon: {
    fontWeight: "bold",
    fontSize: 34,
    color: "#d1d1d1",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f5a22b",
  },
  favourite: {
    marginRight: 15,
  },
});

const Favourite = ({isFavourite, changeIsFavourite}) =>
  isFavourite ? (
    <Icon accessibilityLabel={`app-header-favour-icon`} testID={`app-header-favour-icon`}
      onPress={changeIsFavourite}
      size={34}
      color="#dc143c"
      name="favorite"
    />
  ) : (
    <Icon accessibilityLabel={`app-header-favour-icon`} testID={`app-header-favour-icon`}
      onPress={changeIsFavourite}
      size={34}
      color="#d1d1d1"
      name="favorite-border"
    />
  );

export default AppHeader;
