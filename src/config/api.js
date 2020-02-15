import axios from "./axios";

export default {
  getCityByName: cityName => axios.get(`.weather?q=${cityName}`)
};
