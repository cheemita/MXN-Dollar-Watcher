import React, { useEffect, useState, useRef} from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview';
import { saveTask, getTask, updateTask } from "../api";
import Layout from "../components/Layout";


const BuySellScreen = ({ navigation, route }) => {
  return (
    
    <View style={{ flex: 1, marginTop: 20,}}>
      <Text style={styles.bbbb}>CHOOSE ONE OPTION</Text>
      <TouchableOpacity style={styles.chooseButton1}>
        <Text style={styles.bbbb1}>BANORTE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chooseButton2}>
        <Text style={styles.bbbb1}>BANCO AZTECA</Text>
      </TouchableOpacity>
      <WebView
        source={{ uri: 'https://www.banorte.com/wps/portal/ixe/Home/indicadores/tipo-de-cambio' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  bbbb:{
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  bbbb1:{
    fontSize: 20,
  },
  chooseButton1:{
    alignItems: "center",
    margin: 20,
    // flexDirection: "row",
    // backgroundColor: "red",
    width: "30%",
    alignSelf: "flex-end",
    marginRight: 100,
    
  },
  chooseButton2:{
    alignItems: "center",
    margin: 20,
    marginTop: 48,
    marginLeft: 100,
    // backgroundColor: "red",
    width: "30%",
    position: "absolute",
    
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
