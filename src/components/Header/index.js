import React from "react";
import { View, Platform } from "react-native";
import { Header as NBHeader, Left, Body, Right } from "native-base";
import PropTypes from "prop-types";
import styled from "styled-components";

const NewHeader = styled(NBHeader)`
  background: ${({ theme }) => theme.primaryColor};
  border-width: 0;
`;

const styles = {
  android: Platform.select({
    android: {
      marginTop: 28,
      borderBottomWidth: 0
    },
    ios: {
      borderBottomWidth: 0
    }
  })
};

const Header = ({ left, body, right }) => {
  return (
    <NewHeader style={styles.android}>
      <Left style={{ flex: 1, minWidth: 90 }}>{left}</Left>
      <Body style={{ flex: 2 }}>{body}</Body>
      <Right>{right}</Right>
    </NewHeader>
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
