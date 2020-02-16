const convertToFahrenheit = temp => {
  return ((temp * 9) / 5 - 459.67).toFixed(0);
};

export const formatWeather = weather => {
  return {
    temperature: convertToFahrenheit(weather.main.temp),
    maxTemperature: convertToFahrenheit(weather.main.temp_max),
    minTemperature: convertToFahrenheit(weather.main.temp_min),
    humidity: weather.main.humidity,
    pressure: weather.main.pressure,
    latitude: weather.coord.lat,
    longitude: weather.coord.lon
  };
};

export const formatTemp = tem => {
  return `${tem}°F`;
};

export const formatHumidity = hum => {
  return `${hum}%`;
};

export const formatPressure = pre => {
  return `${pre} hPa`;
};
