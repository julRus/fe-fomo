import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Picker,
  TextInput,
  ImageBackground,
  View,
  Text
} from "react-native";
// import { StackNavigator} from "react-navigation"

export default function SignUpScreen(props) {
  /*
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [authDetails, setAuthDetails] = useState({
      username: "",
      password: ""
    });
  */
  /*
    this.state = {
      username: "",
      email: "",
      password: "",
      ageRange: "",
      gender: ""
    };
  */

  SignUpScreen.navigationOptions = {
    headerStyle: { backgroundColor: "black" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white"
  };

  return (
    <View>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        source={require("../assets/bg.jpg")}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewContainer}>
            <Text style={styles.logo}>FOMO</Text>
            <Text style={styles.title}>Create your account</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: "orange"
  },
  viewContainer: {
    // backgroundColor: "orange"
  },
  logo: {
    textAlign: "center",
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: "5%",
    width: "80%",
    paddingBottom: "5%",
    fontSize: 40,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 0.5
  },
  title: {
    // marginTop: "10%",
    // marginBottom: 20,
    textAlign: "center",
    fontSize: 28,
    color: "white"
  }
});
