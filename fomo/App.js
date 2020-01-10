import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import HomeScreen from "./Screens/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        source={require("./assets/bg.jpg")}
      >
        <HomeScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});
