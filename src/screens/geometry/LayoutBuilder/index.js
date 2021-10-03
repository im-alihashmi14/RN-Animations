/* eslint-disable react-native/no-inline-styles */
//import liraries
import {set, get} from 'lodash';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../constants/screenSize';
import {cloneObject, LayoutAnimationConfigure} from '../../../utils/functions';
import LayoutView from './LayoutView';
import AnimatedView from './View';
const CIRCLE_RADIUS = fullWidth * 0.4;
const BEADS_RADIUS = 10 * heightRef;
// create a component
const LayoutBuilder = () => {
  const [totalBeads, setTotalBeads] = React.useState(1);
  const [layout, setLayout] = React.useState([[{}, {}], {}]);
  const [selectedIndex, setSelectedIndex] = React.useState([0]);

  const handleAddRow = () => {
    let arr = cloneObject(layout);
    let id = selectedIndex.slice(0, selectedIndex.length - 1);
    let row = get(arr, id);
    if (selectedIndex.length % 2 == 0) {
      set(arr, selectedIndex, [{}, {}]);
    } else {
      if (id.length === 0) {
        arr.push({});
      } else {
        row.push({});
        set(arr, id, row);
      }
    }
    console.log(JSON.stringify(arr, null, 1), row);
    setLayout(arr);
    // LayoutAnimationConfigure();
  };

  const handleAddCol = () => {
    let arr = cloneObject(layout);
    let id = selectedIndex.slice(0, selectedIndex.length - 1);
    let row = get(arr, id);
    if (selectedIndex.length % 2 === 1) {
      set(arr, selectedIndex, [{}, {}]);
    } else {
      if (id.length === 0) {
        arr.push({});
      } else {
        row.push({});
        set(arr, id, row);
      }
    }
    console.log(JSON.stringify(arr, null, 1), row);
    setLayout(arr);
    // LayoutAnimationConfigure();
  };

  const handleRemoveCell = () => {
    let arr = cloneObject(layout);
    let id = selectedIndex.slice(0, selectedIndex.length - 1);
    let row = get(arr, id);
    let [LastIndex] = selectedIndex.slice(-1);
    if (id.length === 0) {
      if (arr.length !== 1) {
        arr.splice(LastIndex, 1);
      } else {
        arr = [{}];
      }
      console.log('pop');
    } else {
      if (row.length === 1) {
        row = {};
      } else {
        row?.splice(LastIndex, 1);
      }
      set(arr, id, row);
    }
    console.log(JSON.stringify(arr, null, 1));

    setLayout(arr);
    // LayoutAnimationConfigure();
  };

  return (
    <View style={styles.container}>
      <View style={{height: fullHeight / 2, width: '100%'}}>
        <LayoutView
          layout={layout}
          dir={'column'}
          selectedIndex={selectedIndex}
          onViewPress={(index = []) => {
            setSelectedIndex(index.reverse());
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginTop: 40,
        }}>
        <Ripple
          onPress={handleAddRow}
          //   onPress={() => setTotalBeads(state => state + 1)}
          style={styles.btn}>
          <Text>Add Row</Text>
        </Ripple>
        <Ripple
          onPress={handleAddCol}
          //   onPress={() =>
          //     setTotalBeads(state => (state === 0 ? state : state - 1))
          //   }
          style={styles.btn}>
          <Text>Add Column</Text>
        </Ripple>
        <Ripple
          onPress={handleRemoveCell}
          //   onPress={() =>
          //     setTotalBeads(state => (state === 0 ? state : state - 1))
          //   }
          style={styles.btn}>
          <Text>Remove Cell</Text>
        </Ripple>
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
export default LayoutBuilder;
