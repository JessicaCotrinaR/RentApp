import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./app/screens/Home";
import Rent from "./app/screens/Rent";
import { SafeAreaView } from "react-navigation";

function HomeScreen() {
  return <Home />;
}

function RentScreen() {
  return <Rent />;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Rent" component={RentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
