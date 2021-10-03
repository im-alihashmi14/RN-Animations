/* eslint-disable react-native/no-inline-styles */
//import liraries
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Animated, {
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../constants/screenSize';

import MaskedView from '@react-native-community/masked-view';
import Bead from './Bead';
const CIRCLE_RADIUS = fullWidth * 0.4;
const BEADS_RADIUS = 10 * heightRef;
// create a component
const RotatingBeads = () => {
  const [totalBeads, setTotalBeads] = React.useState(0);
  const perSector = 180 / totalBeads;

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {Array(totalBeads)
          .fill(0)
          .map((v, i) => (
            <Bead
              index={i}
              key={i}
              perSector={perSector}
              angle={perSector * i}
              circleRadi={CIRCLE_RADIUS}
              size={BEADS_RADIUS}
            />
          ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginTop: 40,
        }}>
        <TouchableOpacity
          onPress={() => setTotalBeads(state => state + 1)}
          style={styles.btn}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setTotalBeads(state => (state === 0 ? state : state - 1))
          }
          style={styles.btn}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#211',
  },
  absoluteView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  circle: {
    height: CIRCLE_RADIUS * 2,
    width: CIRCLE_RADIUS * 2,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: fullWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
    height: 60 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    marginHorizontal: 20 * widthRef,
    borderRadius: 10,
    elevation: 5,
  },
});

//make this component available to the app
export default RotatingBeads;
