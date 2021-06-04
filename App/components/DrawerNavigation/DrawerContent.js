import React from "react";
import {View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {NavLinks} from "./NavLinks";

export const DrawerContent = ({navigation, flatManager}) => {

    return (
        <View style={styles.container} accessibilityLabel={`drawer-con`} testID={`drawer-con`}>
            <View style={styles.blackRectangle} accessibilityLabel={`drawer-rec`} testID={`drawer-rec`}></View>
            <View style={styles.navigation}>
                <Icon accessibilityLabel={`drawer-icon`} testID={`drawer-icon`}
                    style={styles.closeIcon}
                    name="close"
                    size={34}
                    color="#FFF"
                    onPress={() => navigation.closeDrawer()}
                />
                <NavLinks navigation={navigation} flatManager={flatManager}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    blackRectangle: {
        backgroundColor: "#000",
        width: "20%",
        height: "100%",
    },
    navigation: {
        flex: 1,
        backgroundColor: "#262626",
        width: "80%",
        height: "100%",
    },
    closeIcon: {
        position: "absolute",
        right: 10,
        top: 15,
    },
});
