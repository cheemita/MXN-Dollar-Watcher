import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview';
import MapView, { Marker } from 'react-native-maps';


const locations = [
  {
    id: 1,
    name: 'Banorte 20 de Noviembre',
    latitude: 24.026714,
    longitude: -104.658984,
    latitudeDelta: 0.0950,
    longitudeDelta: 0.0521,
    color: 'red',
  },
  {
    id: 2,
    name: 'Banorte Francisco Villa',
    latitude: 24.036606,
    longitude: -104.633869,
    latitudeDelta: 0.0950,
    longitudeDelta: 0.0521,
    color: 'red',
  },
  {
    id: 3,
    name: 'Banorte Blvd. Domingo Arrieta',
    latitude: 24.00599604999418,
    longitude: -104.66211077630412,
    latitudeDelta: 0.0950,
    longitudeDelta: 0.0521,
    color: 'red',
  },
  {
    id: 4,
    name: 'Banorte Paseo Durango',
    latitude: 24.03560982388837,
    longitude: -104.65080869408489,
    latitudeDelta: 0.0950,
    longitudeDelta: 0.0521,
    color: 'red',
  },
  {
    id: 5,
    name: 'Banco Azteca Jardines de Durango',
    latitude: 24.04688517648489,
    longitude: -104.63123022975225,
    latitudeDelta: 0.0950,
    longitudeDelta: 0.0521,
    color: 'green',
  },
  {
    id: 6,
    name: 'Banco Azteca Cd. Industrial',
    latitude: 24.047610960478192,
    longitude: -104.62185599338247,
    latitudeDelta: 0.0950,
    longitudeDelta: 0.0521,
    color: 'green',
  },
];

const BuySellScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>

      <MapView style={styles.map}
        initialRegion={{
          latitude: 24.027686,
          longitude: -104.653255,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {locations.map(location => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.name}
            pinColor={location.color}
          />
        ))}
      </MapView>

      <WebView
        source={{ uri: 'https://www.pesomxn.com/conversor/widget' }}
        style={{ flex: 1, width: "90%", alignSelf: "center", marginTop: 20, }}
      />

    </View >
  );
}


const styles = StyleSheet.create({

  map: {
    alignSelf: "center",
    width: '90%',
    height: '50%',
    borderRadius: "60%",
    backgroundColor: "black"
  },

  bbbb: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  bbbb1: {
    fontSize: 20,
  },
  chooseButton1: {
    alignItems: "center",
    margin: 20,
    // backgroundColor: "red",
    width: "30%",
    alignSelf: "flex-end",
    marginRight: 100,

  },
  chooseButton2: {
    alignItems: "center",
    margin: 20,
    marginTop: -48,
    marginLeft: 100,
    // backgroundColor: "red",
    width: "30%",
    // position: "absolute",

  },
  chooseButton3: {
    alignItems: "center",
    // margin: 20,
    // marginTop: -48,
    // marginLeft: 100,
    // backgroundColor: "red",
    width: "30%",
    // position: "absolute",

  },
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 30,
    color: "#ffffff",
    textAlign: "center",
    padding: 4,
    borderRadius: 5,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default BuySellScreen;
