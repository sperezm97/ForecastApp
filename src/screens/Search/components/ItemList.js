import React from "react";
import { ListItem, Left, Body } from "native-base";
import PropTypes from "prop-types";
import { Text, Icon } from "../../../components";

const ItemList = props => {
  return (
    <ListItem onPress={props.onPress}>
      <Left>
        <Icon name="ios-clock" type="Ionicons" />
        <Body>
          <Text>{props.countryName}</Text>
        </Body>
      </Left>
    </ListItem>
  );
};

ItemList.propTypes = {
  countryName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
export default ItemList;
