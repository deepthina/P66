import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  speak = () => {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"lightblue"}
          centerComponent={{
            text: "Text to Speech Converter",
            style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={require("./assets/speech.png")}
        />
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 130,
            marginTop: 50,
            fontSize: 25,
          }}
        >
          Enter The Word
        </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.speak();
          }}
        >
          <Text style={styles.buttonText}>Click Here to Hear Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 130,
  },
  inputBox: {
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
  },
  goButton: {
    width: 200,
    height: 100,
    alignSelf: "center",
    padding: 10,
    margin: 50,
    backgroundColor: "lightblue",
    borderRadius: 40,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
