import React from "react";
import { StyleSheet, ImageBackground, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./Screens/HomePage";
import Screen2 from "./Screens/Screen2";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            width: "100%",
            height: "100%"
          }}
          source={require("./assets/bg.jpg")}
        >
          <Button
            title="Go To Screen 2"
            onPress={() => this.props.navigation.navigate("Other")}
          />
          <HomeScreen />
        </ImageBackground>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: Home,
  Other: Screen2
});

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
