import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const ForeCastStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ForeCastStack.Navigator>
        <ForeCastStack.screen />
      </ForeCastStack.Navigator>
    </NavigationContainer>
  );
}
