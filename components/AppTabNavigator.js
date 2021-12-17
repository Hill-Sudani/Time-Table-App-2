import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import WelcomeScreen from '../Screens/WelcomeScreen';
import ViewScreen from '../Screens/ViewScreen';
import EditScreen from '../Screens/EditScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export const AppTabNavigator = createBottomTabNavigator({
  View: {
    screen: ViewScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/snack-icon.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'VIEW',
    },
  },
  Edit: {
    screen: EditScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/snack-icon.png')}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'EDIT',
    },
  },
});
