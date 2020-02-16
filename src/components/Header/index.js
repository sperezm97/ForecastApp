import React from "react";
import { View } from "react-native";
import { Header as NBHeader, Left, Body, Right } from "native-base";
import PropTypes from "prop-types";

const Header = ({ left, body, right }) => {
  return (
    <NBHeader>
      <Left>{left}</Left>
      <Body>{body}</Body>
      <Right>{right}</Right>
    </NBHeader>
  );
};

Header.propTypes = {
  left: PropTypes.element,
  body: PropTypes.element,
  right: PropTypes.element
};

Header.defaultProps = {
  left: <View />,
  body: <View />,
  right: <View />
};

export default Header;
