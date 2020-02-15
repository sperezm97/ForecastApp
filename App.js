import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import * as screen from "./src/screens";

const ForeCastStack = createStackNavigator();

export default function App() {
  const [isLoadFonts, setLoadFonts] = useState(false);

  const loadAsyncFonts = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  };

  if (!isLoadFonts) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ForeCastStack.Navigator initialRouteName="home" headerMode="none">
        <ForeCastStack.screen name="home" component={screen.Home} />
        <ForeCastStack.screen name="details" component={screen.Details} />
      </ForeCastStack.Navigator>
    </NavigationContainer>
  );
}
