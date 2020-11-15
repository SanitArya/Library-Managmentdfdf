import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import BookScreen from "./Screen/BookTransScreen"
import SearchScreen from "./Screen/SearchScreen";


export default function App() {
  return (
    
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({

  Transaction:{screen:BookScreen},
  Search:{screen:SearchScreen}
}) 

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
