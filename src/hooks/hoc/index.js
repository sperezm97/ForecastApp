import flowRight from "lodash/flowRight";
import WithNotification from "./WithNotification";
import WithLoader from "./WithLoader";
import WeatherProvider from "./WeatherProvider";
export { WithLoader, WeatherProvider };

export default component => flowRight(WithNotification)(component);
