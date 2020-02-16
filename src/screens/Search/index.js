import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Button, Input, Item } from "native-base";
import { Header, Icon, View, Text } from "../../components";
import ItemList from "./components/ItemList";
import useWeatherContext from "../../hooks/useWeatherContext";
import withHOC from "../../hooks/hoc";
import { setItem, removeItem } from "../../hooks/asyncStorage";
import theme from "../../hooks/theme";

const Search = () => {
  const [valueInput, setValueInput] = useState("");
  const [isSearching, setSearching] = useState(false);
  const {
    lastCountries,
    setCountry,
    changeCountry,
    deleteCountryFromList
  } = useWeatherContext();
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  const setContextSelected = async () => {
    await setItem("list", valueInput);
    setCountry(valueInput);
    navigation.goBack();
  };

  const onPressListItem = country => {
    changeCountry(country);
    navigation.goBack();
  };

  const onRemove = countryIndex => {
    removeItem(countryIndex);
    deleteCountryFromList(countryIndex);
  };

  return (
    <Container>
      <Header
        left={
          <Button transparent onPress={() => onBack()} icon>
            <Icon header name="ios-arrow-back" type="Ionicons" />
          </Button>
        }
      />
      <Content>
        <View InputContainer>
          <Item>
            <Input
              value={valueInput}
              onChangeText={setValueInput}
              placeholder="Write your favorite country"
              blurOnSubmit
              onSubmitEditing={() => setContextSelected()}
              onTouchStart={() => setSearching(true)}
              selectionColor={theme.ink}
            />
          </Item>
        </View>
        <View>
          {lastCountries.length > 0 &&
            isSearching &&
            lastCountries.map((country, index) => (
              <ItemList
                key={country + index}
                countryName={country}
                onPress={() => onPressListItem(country)}
                onRemoveCountry={() => onRemove(index)}
              />
            ))}
        </View>
      </Content>
    </Container>
  );
};

export default withHOC(Search);
