//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Initial from '../screens';
import {navOptionHandler} from '../utils/functions';
import Boarding from '../screens/boarding';
import FlowAnimation from '../screens/boarding/flowAnimation';
import Geometry from '../screens/geometry';
import RotatingBeads from '../screens/geometry/RotatingBeads';
import LayoutBuilder from '../screens/geometry/LayoutBuilder';

const StackApp = createStackNavigator();
// create a component
const GeometryStack = () => {
  return (
    <StackApp.Navigator initialRouteName="Home">
      <StackApp.Screen
        name="Home"
        component={Geometry}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="Rotating Beads"
        component={RotatingBeads}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="Layout Builder"
        component={LayoutBuilder}
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
export default GeometryStack;
