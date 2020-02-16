import React from "react";
import { Card, CardItem, Body } from "native-base";
import PropTypes from "prop-types";
import MapView from "react-native-maps";
import View from "../View";
import Icon from "../Icon";
import Text from "../Text";
import {
  formatTemp,
  formatHumidity,
  formatPressure
} from "../../hooks/utils/formats";

const BodyCard = props => {
  const temperature = formatTemp(props.weather.temperature);
  const pressure = formatPressure(props.weather.pressure);
  const humidity = formatHumidity(props.weather.humidity);
  const maxTemperature = formatTemp(props.weather.maxTemperature);
  const minTemperature = formatTemp(props.weather.minTemperature);
  return (
    <Card>
      <CardItem>
        <Body>
          <Text>{temperature}</Text>
          <Text>{pressure}</Text>
          <Text>{humidity}</Text>
          <Text>{maxTemperature}</Text>
          <Text>{minTemperature}</Text>
          <MapView
            style={{ height: 200, width: 200 }}
            region={{
              latitude: props.weather.latitude,
              longitude: props.weather.longitude,
              latitudeDelta: 0,
              longitudeDelta: 0
            }}
          />
        </Body>
      </CardItem>
    </Card>
  );
};

BodyCard.propTypes = {
  weather: PropTypes.shape({
    temperature: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
    maxTemperature: PropTypes.number,
    minTemperature: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number
  }).isRequired
};

export default BodyCard;
