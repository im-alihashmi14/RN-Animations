//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Initial from '../screens';
import {navOptionHandler} from '../utils/functions';
import CardHiding from '../screens/scroll/cardHiding';
import Scroll from '../screens/scroll';

const StackApp = createStackNavigator();
// create a component
const ScrollStack = () => {
  return (
    <StackApp.Navigator initialRouteName="Home">
      <StackApp.Screen
        name="Home"
        component={Scroll}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="CardHiding"
        component={CardHiding}
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
export default ScrollStack;
