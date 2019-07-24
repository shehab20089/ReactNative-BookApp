/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { data } from "../Api/DummeyBooks.js";
import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Button,
  ScrollView,
  Image,
  View,
  TouchableHighlight,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

const App = () => {
  return (
    <View style={styles.Container}>
      <View>
        <Image
          style={{ width: 150, height: 150, borderRadius: 20 }}
          source={{ uri: data[0].bookimg } }
        />
      </View>
      <Button
        onPress={() => {
          Alert.alert("You tapped the button!");
        }}
        title="Click Here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "red",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
