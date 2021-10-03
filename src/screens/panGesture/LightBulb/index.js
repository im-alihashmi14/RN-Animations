import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {
  Shadow,
  NeomorphBlur,
  Neomorph,
} from 'react-native-neomorph-shadows-fixes';

import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {fullWidth} from '../../../constants/screenSize';

const AnimatedNeomorph = Animated.createAnimatedComponent(Neomorph);
const AnimatedNeomorphBlur = Animated.createAnimatedComponent(NeomorphBlur);
const LightBulb = () => {
  const startingPosition = 0;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      //   pressed.value = true;
    },
    onActive: (event, ctx) => {
      x.value = startingPosition + event.translationX;
      y.value = startingPosition + event.translationY;
    },
    onEnd: (event, ctx) => {
      //   pressed.value = false;
      x.value = withSpring(startingPosition);
      y.value = withSpring(startingPosition);
    },
  });
  return (
    <View style={styles.container}>
      <AnimatedNeomorph
        // {...(Platform.OS === 'android' ? {inner: true} : {})}
        // inner // <- enable inner shadow
        // useArt // <- set this/ prop to use non-native shadow on ios

        style={[
          {
            shadowOpacity: 1,
            shadowColor: 'grey',
            shadowRadius: 20,
            borderRadius: 100,
            backgroundColor: 'white',
            width: 100,
            height: 100,
            // ...include most of View/Layout styles
          },
          useAnimatedStyle(() => {
            // console.log(x.value);
            return {
              shadowOffset: {
                width: interpolate(
                  x.value,
                  [0, fullWidth],
                  [0, fullWidth],
                  'clamp',
                ),
                height: 5 + y.value,
              },
            };
          }),
        ]}>
        <AnimatedNeomorphBlur
          //   {...(Platform.OS === 'android' ? {inner: true} : {})}
          // inner // <- enable inner shadow
          // useArt // <- set this/ prop to use non-native shadow on ios
          style={[
            {
              shadowOpacity: 1,
              shadowColor: 'grey',
              shadowRadius: 15,
              borderRadius: 100,
              backgroundColor: 'white',
              width: 100,
              height: 100,
              // ...include most of View/Layout styles
            },
            useAnimatedStyle(() => ({
              shadowOffset: {width: -5 + x.value, height: 5 + y.value},
            })),
          ]}
        />
      </AnimatedNeomorph>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <AnimatedNeomorphBlur
          //   {...(Platform.OS === 'android' ? {inner: true} : {})}
          //   inner // <- enable inner shadow
          // useArt // <- set this/ prop to use non-native shadow on ios
          style={[
            {
              position: 'absolute',
              bottom: 40,
              shadowOpacity: 1,
              shadowColor: 'grey',
              shadowRadius: 15,
              borderRadius: 100,
              backgroundColor: '#ECF0F3',
              width: 80,
              height: 80,
              // ...include most of View/Layout styles
            },
            useAnimatedStyle(() => ({
              transform: [{translateX: x.value}, {translateY: y.value}],
              shadowOffset: {width: -5, height: 5},
            })),
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default LightBulb;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  Bulb: {
    position: 'absolute',
    bottom: 20,
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 50,
  },
});
