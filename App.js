import React from 'react';
import {  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './page/Home';
import Details from './page/Home';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
