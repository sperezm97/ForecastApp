import { useContext } from "react";
import WeatherContext from "./weatherContext";

const useWeatherContext = () => {
  const [state, dispatch] = useContext(WeatherContext);

  const addCountry = newCountryName => {
    dispatch(country => {
      if (country.lastCountries.length >= 5) {
        return {
          ...country,
          selectedCountry: newCountryName,
          lastCountries: country.lastCountries.splice(
            country.lastCountries.length
          )
        };
      }
      return {
        ...country,
        selectedCountry: newCountryName,
        lastCountries: country.lastCountries.concat(newCountryName)
      };
    });
  };

  const changeCountrySelected = countryName => {
    dispatch(country => {
      return {
        ...country,
        selectedCountry: countryName
      };
    });
  };

  return {
    ...state,
    setCountry: addCountry,
    changeCountry: changeCountrySelected
  };
};

export default useWeatherContext;
