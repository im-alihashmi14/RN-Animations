//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

// create a component
const SCreen = props => {
  const color = props.route.params.color;
  const heading = props.route.params.heading;
  return (
    <>
      <View style={{...styles.container, backgroundColor: color}}>
        <Text style={{fontSize: 49}}>{heading}</Text>
        <Svg height={300} width={400}>
          <Path
            d="M 25,75 q 10,-25 10,-25 q 10,-75 10,25 q 10,-25 10,0 Z" // put your path here
            fill="blue"
            stroke="blue"
          />
        </Svg>
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
