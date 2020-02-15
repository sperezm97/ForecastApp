import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as screen from "./src/screens";

const ForeCastStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ForeCastStack.Navigator initialRouteName="home">
        <ForeCastStack.screen name="home" component={screen.Home} />
        <ForeCastStack.screen name="details" component={screen.Details} />
      </ForeCastStack.Navigator>
    </NavigationContainer>
  );
}
