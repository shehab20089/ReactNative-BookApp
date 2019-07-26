import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text, Dimensions } from "react-native";
import BookItem from "./BookItem";
const data = [
  { key: "A" },
  { key: "B" },
  { key: "C" },
  { key: "D" },
  { key: "E" },
  { key: "F" },
  { key: "G" },
  { key: "H" },
  { key: "I" }
  // { key: "J" }
];
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

export default class BookList extends Component {
  constructor(props) {
    super(props);
  }
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    } else if (index % 2 != 0) {
      return (
        <View style={styles.itemCol2}>
          <Text style={styles.itemText}>{item.key}</Text>
        </View>
      );
    } else
      return (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.key}</Text>
        </View>
      );
  };
  render() {
    const { Books } = this.props;
    console.log(Books);
    const col2 = [];
    const col1 = Books.filter((item, index) => {
      if (index < Books.length / 2) {
        return true;
      } else {
        col2.push(item);
        return false;
      }
    });

    return (
      <FlatList
        style={styles.container}
        numColumns={2}
        // columnWrapperStyle={{ backgroundColor: "green" }}
        style={{ flex: 1, marginVertical: 20 }}
        data={formatData(data, 2)}
        renderItem={this.renderItem}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  item: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    // border
    flex: 1,
    margin: 1,
    paddingBottom: 0,
    height: Dimensions.get("window").width / 2 // approximate a square
  },
  itemCol2: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    // border
    flex: 1,
    margin: 1,
    height: (Dimensions.get("window").width / 2) * 1.23 // approximate a square
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  }
});
