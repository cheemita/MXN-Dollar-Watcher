import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import BuySellScreen from "./screens/BuySellScreen";
import DatosApi from "./screens/DatosApi";
import DatosApi2 from "./screens/DatosApi2";
import DatosApi3 from "./screens/DatosApi3";
import DatosApi4 from "./screens/DatosApi4";
import DatosApi5 from "./screens/DatosApi5";
import DatosApi6 from "./screens/DatosApi6";
import MONEDAS from "./screens/MONEDAS";
import charts from "./screens/charts";

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "MXN-Dollar Watcher",
            headerStyle: {
              backgroundColor: "#18325A"
            },
            headerTitleStyle: {
              color: "white",
              textAlign: "center",
              fontSize: 20,
              width: windowWidth,
              marginLeft: -10,
            },
          })}
        />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            title: 'CHART ON LIVE',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="BuySellScreen"
          component={BuySellScreen}
          options={{
            title: 'Foreign Exchange',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="DatosApi"
          component={DatosApi}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="DatosApi2"
          component={DatosApi2}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="DatosApi3"
          component={DatosApi3}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="DatosApi4"
          component={DatosApi4}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="DatosApi5"
          component={DatosApi5}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="DatosApi6"
          component={DatosApi6}
          options={{
            title: 'Datos',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="MONEDAS"
          component={MONEDAS}
          options={{
            title: 'Coins type',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="charts"
          component={charts}
          options={{
            title: 'Graphics',
            headerStyle: {
              backgroundColor: "#18325A",
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
