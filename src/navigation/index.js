//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Initial from '../screens';
import {navOptionHandler} from '../utils/functions';
import TabStack from './tabBar';
import ScrollStack from './scroll';
import BoardingStack from './boarding';
import GeometryStack from './geometry';
import PanGestureStack from './pangesture';

const StackApp = createStackNavigator();
// create a component
const RootStack = () => {
  return (
    <StackApp.Navigator initialRouteName="Home">
      <StackApp.Screen
        name="Home"
        component={Initial}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="TabBar"
        component={TabStack}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="Scroll"
        component={ScrollStack}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="Boarding"
        component={BoardingStack}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="Geometry"
        component={GeometryStack}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="PanGesture"
        component={PanGestureStack}
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
export default RootStack;
