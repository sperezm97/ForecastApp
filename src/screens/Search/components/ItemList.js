import React from "react";
import { ListItem, Left, Body, Right, Button } from "native-base";
import PropTypes from "prop-types";
import { Text, Icon, View } from "../../../components";
import theme from "../../../hooks/theme";

const ItemList = props => {
  return (
    <ListItem noIndent onPress={props.onPress}>
      <Left>
        <View>
          <Icon name="ios-clock" type="Ionicons" list color={theme.lightGrey} />
        </View>
        <Body>
          <Text listItem color={theme.lightGrey}>
            {props.countryName}
          </Text>
        </Body>
      </Left>
      <Right>
        <Button transparent onPress={props.onRemoveCountry}>
          <Icon
            name="ios-close-circle"
            type="Ionicons"
            list
            color={theme.red}
          />
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
