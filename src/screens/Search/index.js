import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Button, Input, Item } from "native-base";
import { Header, Icon } from "../../components";
import ItemList from "./components/ItemList";
import useWeatherContext from "../../hooks/useWeatherContext";
import withHOC from "../../hooks/hoc";

const Search = () => {
  const [valueInput, setValueInput] = useState("");
  const { lastCountries, setCountry, changeCountry } = useWeatherContext();
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  const setContextSelected = () => {
    setCountry(valueInput);
    navigation.goBack();
  };

  const onPressListItem = country => {
    changeCountry(country);
    navigation.goBack();
  };

  return (
    <Container>
      <Header
        left={
          <Button transparent onPress={() => onBack()} icon>
            <Icon name="ios-arrow-back" type="Ionicons" />
          </Button>
        }
      />
      <Content>
        <View>
          <Item>
            <Input
              value={valueInput}
              onChangeText={setValueInput}
              blurOnSubmit
              onSubmitEditing={() => setContextSelected()}
            />
          </Item>
        </View>
        <View>
          <View />
          {lastCountries.map(country => (
            <ItemList
              key={country}
              countryName={country}
              onPress={() => onPressListItem(country)}
            />
          ))}
        </View>
      </Content>
    </Container>
  );
};

export default withHOC(Search);
