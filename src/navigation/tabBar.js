//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Initial from '../screens';
import {navOptionHandler} from '../utils/functions';
import TabBar from '../screens/tabBar';
import CardHiding from '../screens/scroll/cardHiding';
import TabBarScreen from '../screens/tabBar/tabBar';

const StackApp = createStackNavigator();
// create a component
const TabStack = () => {
  return (
    <StackApp.Navigator initialRouteName="Home">
      <StackApp.Screen
        name="Home"
        component={TabBar}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="TabBarAnimation"
        component={TabBarScreen}
        options={navOptionHandler}
      />
    </StackApp.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

//make this component available to the app
export default TabStack;
