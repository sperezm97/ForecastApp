import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import * as screen from "./src/screens";
import theme from "./src/hooks/theme";
import { WeatherProvider } from "./src/hooks/hoc";

const ForeCastStack = createStackNavigator();

export default function App() {
  const [isLoadFonts, setLoadFonts] = useState(false);

  const loadAsyncFonts = async () => {
    try {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
    } catch (error) {
      console.log(error);
    }
    setLoadFonts(true);
  };

  useEffect(() => {
    loadAsyncFonts();
    return () => {};
  }, []);

  if (!isLoadFonts) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <WeatherProvider>
          <ForeCastStack.Navigator initialRouteName="home" headerMode="none">
            <ForeCastStack.Screen name="home" component={screen.Home} />
            <ForeCastStack.Screen name="search" component={screen.Search} />
          </ForeCastStack.Navigator>
        </WeatherProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
