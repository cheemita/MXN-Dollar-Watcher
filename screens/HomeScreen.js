import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, StatusBar } from "react-native";



const HomeScreen = ({ navigation }) => {

  return (

    <View style={{ flex: 1, margin: 15, }}>
      <StatusBar backgroundColor="#18325A" />
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskFormScreen")}
        style={styles.chooseButton2}>
        <Text style={styles.bbbb2}>CHART ON LIVE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Map")}
        style={styles.chooseButton2}>
        <Text style={styles.bbbb2}>FOREIGN EXCHANGES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.chooseButton2} onPress={() => navigation.navigate("MONEDAS")}>
        <Text style={styles.bbbb2}>COIN TYPE</Text>
      </TouchableOpacity>

    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    backgroundColor: "#18325A",
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  bbbb2: {
    fontSize: 18,
    color: "white"
  },
  chooseButton2: {
    marginTop: 15,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#ffff",
    borderWidth: 1,
    padding: 25,
    backgroundColor: "#1472AA",

  },

});

export default HomeScreen;
