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
    <View container="card">
      <CardItem bordered style={{ borderRadius: 20 }}>
        <View style={{ flex: 1 }}>
          <View container="title">
            <Text header weight="bold">
              {props.country}
            </Text>
            <Text header weight="bold">
              {temperature}
            </Text>
          </View>
          <View container="row">
            <View container="column">
              <View container="item">
                <Text body>Pressure:</Text>
                <Text value>{pressure}</Text>
              </View>
              <View container="item">
                <Text body>Humidity:</Text>
                <Text value>{humidity}</Text>
              </View>
              <View container="item">
                <Text body>Max Temp:</Text>
                <Text value>{maxTemperature}</Text>
              </View>
              <View container="item">
                <Text body>Min Temp:</Text>
                <Text value>{minTemperature}</Text>
              </View>
            </View>
            <View column>
              <MapView
                style={{ height: 200, width: 200, borderRadius: 20 }}
                region={{
                  latitude: props.weather.latitude,
                  longitude: props.weather.longitude,
                  latitudeDelta: 0,
                  longitudeDelta: 0
                }}
              />
            </View>
          </View>
        </View>
      </CardItem>
    </View>
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
  }).isRequired,
  country: PropTypes.string.isRequired
};

export default BodyCard;
