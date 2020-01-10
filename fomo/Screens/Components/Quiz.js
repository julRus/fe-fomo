import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Modal
} from "react-native";

import arrayOfInterests from "./interest";

export default function Quiz(props) {
  const [interests, setInterests] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [opacityOfInterests, setOpacityOfInterests] = useState(1);
  const [clickedInterest, setClickedInterest] = useState(false);

  useEffect(() => {
    setInterests(arrayOfInterests);
  });

  function handleInterestPress(item) {}

  return (
    <View>
      <Modal visible={props.view}>
        <Text style={styles.title}>
          What are your interests? {`Choose ${4 - keywords.length}`}
        </Text>
        <FlatList
          style={styles.choices}
          data={interests}
          renderItem={({ item }) => (
            <View
              style={{
                opacity: item.opacity,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 210,
                margin: 5
              }}
            >
              <ImageBackground style={styles.images} source={item.img}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>{item.key}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )}
          numColumns={2}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    paddingBottom: 60
  },
  title: {
    color: "white",
    fontSize: 20,
    width: "100%",
    height: "10%",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "black"
  },
  choices: {
    backgroundColor: "black"
  },
  button: {
    height: 230,
    width: 200,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "black",
    opacity: 0.5,
    top: -10
  },
  images: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  text: {
    fontSize: 20,
    margin: 20,
    paddingRight: 10,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff"
  }
});
