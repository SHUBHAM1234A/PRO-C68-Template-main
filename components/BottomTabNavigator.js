import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

//The Icon Library
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Ride"
            component={RideScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="car" color={color} size={size} />
              ),
            }}
          />

          {
            // I searched "how to put icons in the botton tab navigator reactjs" on google, and this is how I did it.
          }

          <Tab.Screen
            name="Ride History"
            component={RideHistoryScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="history" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
