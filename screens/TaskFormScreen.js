import React, { useEffect, useState, useRef} from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { WebView } from 'react-native-webview';
import { saveTask, getTask, updateTask } from "../api";
import Layout from "../components/Layout";


const TaskFormScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://www.tradingview.com/widgetembed/?frameElementId=tradingview_228f8&symbol=FX%3AUSDMXN&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&backgroundColor=%23ffffff&gridColor=rgba(42%2C 46%2C 57%2C 0.06)&studies=[]&theme=light&style=1&timezone=Etc%2FUTC&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=en#{"page-uri"%3A"www.tradingview.com%2Fwidget%2Fadvanced-chart%2F"}' }}
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

export default TaskFormScreen;
