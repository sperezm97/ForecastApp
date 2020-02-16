import { Dimensions } from "react-native";

export default {
  // COLORS
  white: "#fff",
  black: "#000000",
  primaryColor: "#ff7043",
  primaryColorLight: "#ffa270",
  primaryColorDark: "#c63f17",
  lightGrey: "#cdcdcd",
  ink: "#333333",
  yellow: "#FFFF00",
  green: "#00FF00 ",
  red: "#FF0000 ",

  // Spacing
  small: 5,
  medium: 10,
  large: 15,
  extraLarge: 20,
  extraXLarge: 25,

  // Fonts
  caption: 13,
  body: 16,
  subHeading: 17,
  heading: 21,
  displaySmall: 16,
  displayMedium: 21,
  displayLarge: 24,
  displayXLarge: 27,

  weightLight: 400,
  weightSemiBold: 600,
  weightSemiBoldItalic: 700,
  weightBold: 900,

  deviceWidth: Dimensions.get("window").width,
  deviceHeight: Dimensions.get("window").height
};
