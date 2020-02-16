export const formatWeather = weather => {
  return {
    temperature: weather.main.temp,
    maxTemperature: weather.main.temp_max,
    minTemperature: weather.main.temp_min,
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
