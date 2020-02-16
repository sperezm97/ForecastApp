import React from "react";
import { ListItem, Left, Body, Right, Button } from "native-base";
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
      <Right>
        <Button transparent icon onPress={props.onRemoveCountry}>
          <Icon name="ios-close-circle" type="Ionicons" />
        </Button>
      </Right>
    </ListItem>
  );
};

ItemList.propTypes = {
  countryName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  onRemoveCountry: PropTypes.func.isRequired
};
export default ItemList;
