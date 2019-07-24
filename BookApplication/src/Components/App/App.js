import { data } from "../Api/DummeyBooks.js";
import React, { Fragment } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import {
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
const App = () => {
  return (
    <View style={styles.Container}>
      <NavigationBar />
      <View>
        <Image
          style={{ width: 150, height: 150, borderRadius: 20 }}
          source={{ uri: data[0].bookimg }}
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
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});

export default App;
