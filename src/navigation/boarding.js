//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Initial from '../screens';
import {navOptionHandler} from '../utils/functions';
import Boarding from '../screens/boarding';
import FlowAnimation from '../screens/boarding/flowAnimation';

const StackApp = createStackNavigator();
// create a component
const BoardingStack = () => {
  return (
    <StackApp.Navigator initialRouteName="Home">
      <StackApp.Screen
        name="Home"
        component={Boarding}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="FlowAnimation"
        component={FlowAnimation}
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
export default BoardingStack;
