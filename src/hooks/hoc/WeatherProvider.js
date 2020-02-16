import React, { useState } from "react";
import WeatherContext from "../weatherContext";

const defaultState = {
  selectedCountry: "",
  lastCountries: []
};
export default ({ children }) => {
  const [state, dispatch] = useState({ ...defaultState });
  return (
    <WeatherContext.Provider value={[state, dispatch]}>
      {children}
    </WeatherContext.Provider>
  );
};
