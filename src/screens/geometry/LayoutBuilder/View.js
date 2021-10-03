import React from 'react';
import {StyleSheet, View as RNView} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const View = ({children, h = '100%', w = '100%', style}) => {
  const height = useSharedValue(0);
  const width = useSharedValue(0);
  const [change, setChange] = React.useState(true);
  const isFirstRun = React.useRef(true);
  React.useEffect(() => {
    // height.value = withSpring(100);
    // width.value = withSpring(100);
    return () => {
      height.value = withSpring(0);
      width.value = withSpring(0);
    };
  }, []);
  console.log(isFirstRun.current);
  return (
    <>
      <RNView
        onLayout={({nativeEvent}) => {
          height.value = withSpring(nativeEvent.layout.height);
          width.value = withSpring(nativeEvent.layout.width);
        }}
        style={styles.absolute}
      />
      <Animated.View
        style={[
          style,
          useAnimatedStyle(() => ({
            height: height.value,
            width: width.value,
            //   flex: 1,
          })),
        ]}>
        {children}
      </Animated.View>
    </>
  );
};

export default View;

const styles = StyleSheet.create({
  absolute: {
    opacity: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'red',
    zIndex: -1000,
  },
});
