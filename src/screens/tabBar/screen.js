//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

// create a component
const SCreen = props => {
  const color = props.route.params.color;
  const heading = props.route.params.heading;
  return (
    <>
      <View style={{...styles.container, backgroundColor: color}}>
        <Text style={{fontSize: 49}}>{heading}</Text>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default SCreen;
