import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {withDelay} from 'react-native-reanimated';
import {useSharedValue, withRepeat} from 'react-native-reanimated';
import {fullWidth} from '../../../constants/screenSize';

const Bead = ({size, angle = 0, circleRadi, index, perSector}) => {
  const translateY = useSharedValue(-circleRadi + size / 2);
  const rotate = useSharedValue(angle);
  const DELAY = angle * 100;
  React.useEffect(() => {
    rotate.value = withSpring(angle);
  }, [angle]);

  React.useEffect(() => {
    translateY.value = withRepeat(
      withTiming(circleRadi - size / 2, {duration: 2000}),
      -1,
      true,
    );
    return () => {
      cancelAnimation(translateY);
    };
  }, [size]);
  console.log((angle * 20) / 180, angle * 20);
  return (
    <Animated.View
      style={[
        styles.line,
        useAnimatedStyle(() => ({
          transform: [{rotate: `${rotate.value}deg`}],
        })),
      ]}>
      <Animated.View
        style={[
          styles.beads(size, angle),
          useAnimatedStyle(() => ({
            transform: [{translateY: translateY.value}],
          })),
        ]}
      />
    </Animated.View>
  );
};

export default Bead;

const styles = StyleSheet.create({
  line: {
    height: '100%',
    width: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  beads: size => ({
    height: size,
    width: size,
    backgroundColor: 'red',
    borderRadius: fullWidth,
  }),
});
