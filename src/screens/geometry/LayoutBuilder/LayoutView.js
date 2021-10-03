import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {compareObject} from '../../../utils/functions';
import AnimatedView from './View';
let direction = {
  row: 'column',
  column: 'row',
};
const LayoutView = ({dir, layout, index, onViewPress, selectedIndex}) => {
  //   console.log(index, selectedIndex);
  return (
    <AnimatedView
      style={[
        styles.layout,
        {
          flexDirection: dir,
        },
      ]}>
      {Array.isArray(layout) ? (
        layout.map((l, i) => (
          <LayoutView
            index={index !== undefined ? [i].concat(index) : [i]}
            layout={l}
            dir={direction[dir]}
            onViewPress={onViewPress}
            selectedIndex={selectedIndex}
          />
        ))
      ) : (
        <Ripple
          rippleColor="#fff"
          onPress={() => onViewPress(index)}
          style={styles.pressable(
            compareObject([...index].reverse(), selectedIndex),
          )}>
          <Text style={{color: 'white'}}>lol</Text>
        </Ripple>
      )}
    </AnimatedView>
  );
};

export default LayoutView;

const styles = StyleSheet.create({
  layout: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  pressable: state => ({
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: state ? 0.5 : 0,
    borderColor: 'red',
  }),
});
