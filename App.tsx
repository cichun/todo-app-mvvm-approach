import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import store from "./src/store";

import AppContainer from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
}
