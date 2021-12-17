import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const switchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  BottomTab: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
