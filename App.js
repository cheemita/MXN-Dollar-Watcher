import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import BuySellScreen from "./screens/BuySellScreen";
import PruebaScreen from "./screens/PruebaScreen";

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
            headerRight: () => (
              <TouchableOpacity //BOTON NEW
                onPress={() => navigation.navigate("PruebaScreen")}
              >
                <Text style={{ color: "#fff", marginRight: 40, fontSize: 15, opacity: 0 }}>
                  New
                </Text>
              </TouchableOpacity>
            ),
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
            title: 'Buy/Sell prices',
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
          name="PruebaScreen"
          component={PruebaScreen}
          options={{
            title: 'Create a Task',
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
