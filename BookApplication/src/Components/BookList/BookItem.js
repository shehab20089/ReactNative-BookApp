import React, { Fragment } from "react";
import { Image } from "react-native";
const BookItem = prop => {
  return (
    <Fragment>
      <Image source={prop.image} />
    </Fragment>
  );
};

export default BookItem;
