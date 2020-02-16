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
          lastCountries: country.lastCountries.splice(0, 1, newCountryName)
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
    dispatch(country => ({
      ...country,
      selectedCountry: countryName
    }));
  };

  const setPersistList = items => {
    dispatch(country => ({
      ...country,
      lastCountries: country.lastCountries.concat(items)
    }));
  };

  const deleteCountryFromList = countryIndex => {
    dispatch(countries => ({
      ...countries,
      lastCountries: countries.lastCountries.filter(
        (country, index) => index != countryIndex
      )
    }));
  };

  return {
    ...state,
    setCountry: addCountry,
    changeCountry: changeCountrySelected,
    setPersistList,
    deleteCountryFromList
  };
};

export default useWeatherContext;
