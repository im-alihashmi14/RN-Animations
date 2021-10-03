/* eslint-disable react-native/no-inline-styles */
//import liraries
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import MaskedView from '@react-native-community/masked-view';
// create a component
const HEIGHT = 70;
const WIDTH = 50;
const SCreen = props => {
  const color = props.route.params.color;
  const heading = props.route.params.heading;
  return (
    <>
      <View style={{...styles.container, backgroundColor: color}}>
        <Text style={{fontSize: 49}}>{heading}</Text>

        <View
          style={{
            // Transparent background because mask is based off alpha channel.d
            justifyContent: 'center',
            alignItems: 'flex-end',
            flexDirection: 'row',
            height: HEIGHT,
            width: '90%',
            // overflow: 'hidden',
            borderRadius: 20,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'yellow',
              borderTopRightRadius: 15,
            }}
          />
          <View
            style={{
              width: WIDTH * 1.6,
              height: HEIGHT * 0.9,
              justifyContent: 'center',
              alignItems: 'center',
              // borderWidth: 1,
              overflow: 'hidden',
              // position: 'absolute',
            }}>
            <View
              style={{
                width: WIDTH,
                height: HEIGHT,
                borderRadius: 200,
                borderWidth: 40,
                borderColor: 'yellow',
                padding: WIDTH * 0.8,
                bottom: HEIGHT * 0.4,
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'yellow',
              borderTopLeftRadius: 15,
            }}
          />
        </View>
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
