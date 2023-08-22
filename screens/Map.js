import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import WebView from 'react-native-webview';

const Map = ({ navigation, route }) => {
  const [apiLocations1, setApiLocations1] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/cheemita/cheemita.github.io/main/locations.json")
      .then((response) => response.json())
      .then((data) => {
        setApiLocations1(data);
      })
      .catch((error) => {
        console.error("Error fetching data from API 1:", error);
      });
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <WebView
        source={{ uri: 'https://www.pesomxn.com/conversor/widget' }}
        style={{ flex: 1, width: "90%", alignSelf: "center", marginTop: 20, }}
      />
      <Text style={{ textAlign: 'center', marginBottom: 15, marginTop: 13, fontSize: 17, }}>BANKS : NEAREST UBICATIONS</Text>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 24.027686,
          longitude: -104.653255,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {apiLocations1.map(location => (
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

    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    alignSelf: "center",
    width: '90%',
    height: '50%',
    borderRadius: "60%",
    backgroundColor: "black",
    marginBottom: 60
  },
});

export default Map;
