//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {navOptionHandler} from '../utils/functions';
import PanGesture from '../screens/panGesture';
import LightBulb from '../screens/panGesture/LightBulb';

const StackApp = createStackNavigator();
// create a component
const PanGestureStack = () => {
  return (
    <StackApp.Navigator initialRouteName="Home">
      <StackApp.Screen
        name="Home"
        component={PanGesture}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="LightBulb"
        component={LightBulb}
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
export default PanGestureStack;
