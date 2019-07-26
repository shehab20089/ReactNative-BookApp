import { data } from "../Api/DummeyBooks.js";
import React, { Fragment } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import BookList from "../BookList/BookList";
import {
  FlatList,
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

      <BookList Books={data} />

      {/* <View>
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
      /> */}
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  Container: {
    // backgroundColor: "green",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column"
  }
});
