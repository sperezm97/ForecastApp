import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Header,
  View,
  Text,
  Icon,
  BodyCard,
  Container,
  Content,
  Button
} from "../../components";
import withHOC, { WithLoader } from "../../hooks/hoc";
import api from "../../config/api";
import { formatWeather } from "../../hooks/utils/formats";
import useWeatherContext from "../../hooks/useWeatherContext";
import { getItem } from "../../hooks/asyncStorage";
import theme from "../../hooks/theme";

const Home = () => {
  const { selectedCountry, setPersistList } = useWeatherContext();
  const [currentWeather, setCurrentWeather] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const getCurrentWeather = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.getCityByName(selectedCountry);
      const formattedWeather = formatWeather(data);
      setCurrentWeather(formattedWeather);
      setIsLoading(false);
    } catch (e) {
      setError(e.response.status == 404);
      setIsLoading(false);
    }
  };

  const loadPersisData = async () => {
    const list = await getItem("list");
    if (list != null) {
      setPersistList(list);
    } else {
      setPersistList([]);
    }
  };

  const clearCurrentWeather = () => {
    setCurrentWeather({});
  };

  useEffect(() => {
    getCurrentWeather();
    return () => {
      clearCurrentWeather();
    };
  }, [selectedCountry]);

  useEffect(() => {
    loadPersisData();
  }, []);

  const onPushSearch = () => {
    navigation.navigate("search");
  };

  return (
    <Container>
      <Header
        right={
          <Button
            transparent
            icon
            onPress={() => onPushSearch()}
            color={theme.primaryColor}
          >
            <Icon header name="ios-search" type="Ionicons" active />
          </Button>
        }
        left={<Text heading>Weather</Text>}
      />
      <Content>
        <WithLoader isLoading={isLoading}>
          <View card="container">
            <Text>
              <Text>Forecast App </Text>
              to find your favorite weather in any places of the world.
            </Text>
            <View container="button">
              <Button block rounded onPress={() => onPushSearch()}>
                <Text>Press here to search one</Text>
              </Button>
            </View>
          </View>
          {Object.keys(currentWeather).length > 0 && (
            <BodyCard weather={currentWeather} country={selectedCountry} />
          )}
          {error && (
            <View card="container" center>
              <Text header>Country not founded</Text>
              <Icon header name="ios-sad" type="Ionicons" />
            </View>
          )}
        </WithLoader>
      </Content>
    </Container>
  );
};

export default withHOC(Home);
