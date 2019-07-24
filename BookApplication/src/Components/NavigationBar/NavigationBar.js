import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Header,
  Icon,
  Text,
  SearchBar,
  Input
} from "react-native-elements";

class NavigationBar extends Component {
  state = {
    search: "1553"
  };
  updateSearch = (search = {});
  render() {
    return (
      <Header
        containerStyle={{
          marginTop: Platform.OS === "ios" ? 0 : -30,
          backgroundColor: "white"
        }}
        leftComponent={
          <Button
            icon={<Icon name="menu" size={30} color="black" />}
            type="clear"
          />
        }
        centerComponent={<Text h4>Book List</Text>}
        rightComponent={
          <Button
            icon={<Icon name="search" size={30} color="black" />}
            type="clear"
          />
        }
      />
    );
  }
}
export default NavigationBar;

const styles = StyleSheet.create({
  NavContainer: {
    backgroundColor: "white",
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "center"
  }
});
