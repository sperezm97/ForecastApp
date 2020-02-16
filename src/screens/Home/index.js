import React, { useEffect, useState } from "react";
import { Container, Content, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Header, View, Text, Icon, BodyCard } from "../../components";
import withHOC, { WithLoader } from "../../hooks/hoc";
import api from "../../config/api";
import { formatWeather } from "../../hooks/utils/formats";
import useWeatherContext from "../../hooks/useWeatherContext";

const Home = props => {
  const { selectedCountry } = useWeatherContext();
  const [currentWeather, setCurrentWeather] = useState({});
  const navigation = useNavigation();

  const getCurrentWeather = async () => {
    try {
      const { data } = await api.getCityByName(selectedCountry);
      const formattedWeather = formatWeather(data);
      setCurrentWeather(formattedWeather);
    } catch (e) {
      props.sendNotification("Country not founded", "danger");
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
        {currentWeather ? <View /> : <BodyCard weather={currentWeather} />}
      </Content>
    </Container>
  );
};

export default withHOC(Home);
