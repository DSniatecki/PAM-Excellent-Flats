import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, TextInput, ImageBackground } from "react-native";
import { ButtonGroup } from "react-native-elements";
import AppHeader from "../components/AppHeader";
import Icon from "react-native-vector-icons/MaterialIcons";
import RNPickerSelect from "react-native-picker-select";
import { Formik } from "formik";

const FiltersScreen = ({ navigation }) => {
  const [purchaseType, setPurchaseType] = useState(0);
  const buttons = ["Kupno", "Wynajem"];

  const priceOptions = [
    { label: "100 000 zł", value: 100000 },
    { label: "200 000 zł", value: 200000 },
    { label: "300 000 zł", value: 300000 },
    { label: "400 000 zł", value: 400000 },
    { label: "500 000 zł", value: 500000 },
    { label: "600 000 zł", value: 600000 },
    { label: "700 000 zł", value: 700000 },
    { label: "800 000 zł", value: 800000 },
    { label: "900 000 zł", value: 900000 },
    { label: "1 000 000 zł", value: 1000000 },
  ];

  const surfaceOptions = [
    { label: "20 m2", value: 20 },
    { label: "40 m2", value: 40 },
    { label: "60 m2", value: 60 },
    { label: "90 m2", value: 90 },
    { label: "120 m2", value: 120 },
    { label: "150 m2", value: 150 },
    { label: "200 m2", value: 200 },
    { label: "250 m2", value: 250 },
  ];

  const updatePurchaseType = selectedType => {
    setPurchaseType(selectedType);
  };

  return (
    <View style={styles.container}>
      <AppHeader
        screenTitle="Wyszukaj"
        navigation={navigation}
        navigationIcon="arrow-back"
      />
      <Formik
        initialValues={{
          location: "",
          priceFrom: 100000,
          priceTo: 1000000,
          surfaceFrom: 20,
          surfaceTo: 250,
        }}
        onSubmit={values => navigation.navigate("FlatsList", values)}>
        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.textInput}
              onChangeText={handleChange("location")}
              value={values.location}
              placeholder="Podaj miejscowość"
              underlineColorAndroid="transparent"
            />
            <Text style={styles.text}>lub</Text>
            <Icon name="my-location" size={60} color="#f5a44d" onPress={() => navigation.navigate("Map")} />
            <Text style={styles.text}>Wybierz</Text>
            <ButtonGroup
              buttons={buttons}
              onPress={updatePurchaseType}
              selectedIndex={purchaseType}
              containerStyle={{
                height: 50,
                width: "85%",
                borderRadius: 8,
                borderColor: "#f5a44d",
                borderWidth: 2,
              }}
              buttonStyle={{ backgroundColor: "#d1d1d1" }}
              selectedButtonStyle={{ backgroundColor: "#f5a44d" }}
              textStyle={{ fontSize: 16, fontWeight: "bold" }}
            />
            <Text style={styles.text}>Cena</Text>
            <View style={styles.selectors}>
              <RNPickerSelect
                onValueChange={(value, index) => {
                  setFieldValue("priceFrom", value);
                }}
                placeholder={{ label: "Od: " }}
                style={pickerStyles}
                items={priceOptions}
                useNativeAndroidPickerStyle={false}
              />
              <RNPickerSelect
                onValueChange={(value, index) => {
                  setFieldValue("priceTo", value);
                }}
                style={pickerStyles}
                placeholder={{ label: "Do: " }}
                items={priceOptions}
                useNativeAndroidPickerStyle={false}
              />
            </View>
            <Text style={styles.text}>Powierzchnia</Text>
            <View style={styles.selectors}>
              <RNPickerSelect
                onValueChange={(value, index) => {
                  setFieldValue("surfaceFrom", value.value);
                }}
                placeholder={{ label: "Od: " }}
                style={pickerStyles}
                items={surfaceOptions}
                useNativeAndroidPickerStyle={false}
              />
              <RNPickerSelect
                onValueChange={(value, index) => {
                  setFieldValue("surfaceTo", value);
                }}
                style={pickerStyles}
                placeholder={{ label: "Do: " }}
                items={surfaceOptions}
                useNativeAndroidPickerStyle={false}
              />
            </View>

            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Zatwierdź</Text>
            </Pressable>
          </View>
        )}

      </Formik>
    </View>
  );
};

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#f5a44d",
    borderRadius: 8,
    color: "#757575",
    fontWeight: "bold",
    padding: 30,
    width: 100,
    marginRight: 20,
    marginLeft: 20,
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#f5a44d",
    borderRadius: 8,
    color: "#757575",
    fontWeight: "bold",
    padding: 30,
    width: 150,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "#FAFAFA",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    flexDirection: 'column',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#757575',
    borderRadius: 8,
    width: 300,
    height: 54,
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  textInput: {
    height: 50,
    width: '80%',
    backgroundColor: '#fff',
    fontSize: 20,
    paddingLeft: 10,
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  selectors: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
export default FiltersScreen;
