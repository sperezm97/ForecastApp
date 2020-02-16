import React, { useEffect, useState } from "react";
import { Container, Content, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Header, View, Text, Icon, BodyCard } from "../../components";
import withHOC, { WithLoader } from "../../hooks/hoc";
import api from "../../config/api";
import { formatWeather } from "../../hooks/utils/formats";
import useWeatherContext from "../../hooks/useWeatherContext";
import { getItem } from "../../hooks/asyncStorage";

const Home = () => {
  const { selectedCountry, setPersistList } = useWeatherContext();
  const [currentWeather, setCurrentWeather] = useState({});
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

  useEffect(() => {
    getCurrentWeather();
    return () => {};
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
          <Button transparent icon onPress={() => onPushSearch()}>
            <Icon name="ios-search" type="Ionicons" />
          </Button>
        }
        left={<Text>Weather</Text>}
      />
      <Content>
        <WithLoader isLoading={isLoading}>
          {Object.keys(currentWeather).length > 0 && (
            <BodyCard weather={currentWeather} />
          )}
        </WithLoader>
      </Content>
    </Container>
  );
};

export default withHOC(Home);
