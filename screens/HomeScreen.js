import React from "react";
import Layout from "../components/Layout";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";



const HomeScreen = ({ navigation }) => {
  return (
    <Layout>

      <View style={{ flex: 1, marginTop: 20, }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TaskFormScreen")}
          style={styles.chooseButton1}>
          <Text style={styles.bbbb1}>CHART ON LIVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("BuySellScreen")}
          style={styles.chooseButton2}>
          <Text style={styles.bbbb2}>FOREIGN EXCHANGES</Text>
        </TouchableOpacity>

      </View>

    </Layout>
  );
};


const styles = StyleSheet.create({

  bbbb1: {
    fontSize: 20,
  },
  bbbb2: {
    fontSize: 20,
  },
  chooseButton1: {
    alignItems: "center",
    paddingTop: "1%"

  },
  chooseButton2: {
    alignItems: "center",
    paddingTop: "5%"
  },

});

export default HomeScreen;
