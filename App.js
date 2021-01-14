import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./app/screens/Home";
import Mood from "./app/screens/Mood";
import DashboardScreen from "./app/screens/DashboardScreen";
import LoginScreen from "./app/screens/LoginScreen";

function HomeScreen() {
  return <Home />;
}

function MoodScreen() {
  return <Mood />;
}

function LogIn() {
  return <LoginScreen />;
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        <Tab.Screen name="Login" component={LogIn} />
        <Tab.Screen name="My moods" component={MoodScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
