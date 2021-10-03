/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {heightRef} from '../../../constants/screenSize';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSpring,
  withSequence,
} from 'react-native-reanimated';
const TransBorder = ({
  iconWidth,
  item,
  index,
  state,
  tabScreen,
  navigation,
  primary,
}) => {
  const width = useSharedValue(iconWidth);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);

  return (
    <Animated.View
      style={useAnimatedStyle(() => {
        return {
          width: width.value,
          backgroundColor: primary,
          height: 60 * heightRef,
          zIndex: state.index === index ? 100 : 0,
        };
      })}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            width: 50 * heightRef,
            height: 50 * heightRef,
            backgroundColor: primary,
            borderRadius: 50,
          },
          useAnimatedStyle(() => {
            return {
              transform: [
                {translateY: translateY.value},
                {translateX: -translateX.value},
              ],
            };
          }, []),
        ]}>
        <TouchableOpacity
          onPress={() => {
            width.value = withSequence(
              withTiming(0, {duration: 1000}, () => {
                translateY.value = withSpring(0);

                translateX.value = withSpring(0);
              }),
              withSpring(iconWidth),
            );

            translateY.value = withTiming(-80, {duration: 1000});

            translateX.value = withTiming(iconWidth / 2 - 5, {duration: 1000});
            navigation.navigate(tabScreen[index].name);
          }}
          style={{
            // backgroundColor: state.index == index ? secondary : primary,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // marginBottom: 10,
            borderRightWidth: 0,
            borderRadius: 20,
            // backgroundColor: 'red',
          }}>
          {state.index === index ? item.solidIcon : item.outlineIcon}
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default TransBorder;

const styles = StyleSheet.create({});
