import React from "react";
import PropTypes from "prop-types";
import { View, Spinner } from "native-base";
import theme from "../theme";

const styles = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

const WithLoading = props => {
  if (props.isLoading) {
    return (
      <View style={styles}>
        <Spinner color={theme.primaryColor} />
      </View>
    );
  }
  return props.children;
};

WithLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};

export default WithLoading;
