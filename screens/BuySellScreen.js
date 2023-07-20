import React, { useEffect, useState, useRef} from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview';
import { saveTask, getTask, updateTask } from "../api";
import Layout from "../components/Layout";


const BuySellScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://www.banorte.com/wps/portal/ixe/Home/indicadores/tipo-de-cambio' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
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
