import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  scrollTo,
} from 'react-native-reanimated';
import {heightRef, widthRef} from '../../constants/screenSize';

import MaskedView from '@react-native-community/masked-view';
function StickyTabBar({state, descriptors, navigation, position, tabs}) {
  const cartRef = React.useRef(null);
  const scrollListReftop = useAnimatedRef(null);
  const secondary = '#A4FFEB';
  const primary = '#39444F';
  // const val=new Animated.Value(0);
  // val.
  // let tabArr = [1, ...state.routes];
  let tabArr = state.routes;
  const inputAr = React.useMemo(
    () =>
      [-1, -0.8, -0.5, 0].concat(
        tabArr.map((_, i) => [i + 0.5, i + 0.8, i + 1]).flat(),
      ),
    [],
  );
  //   console.log(inputAr, inputAr.length);
  const inputArr = [
    state.index - 1,
    state.index - 0.8,
    state.index - 0.5,
    state.index + 0,
    state.index + 0.5,
    state.index + 0.8,
    state.index + 1,
  ];
  const translateX = React.useRef(
    Animated.interpolateNode(position, {
      inputRange: inputAr,
      outputRange: [-1 * 139 * widthRef, -1 * 139 * widthRef, 0, 0].concat(
        tabArr
          .map((_, i) => [
            i * 139 * widthRef,
            (i + 1) * 139 * widthRef,
            (i + 1) * 139 * widthRef,
          ])
          .flat(),
      ),
      extrapolate: 'clamp',
    }),
  ).current;

  // React.useEffect(() => {
  //   scrollListReftop?.current?.scrollTo({
  //     x: position.value * 139 * widthRef,
  //     y: 0,
  //     animated: false,
  //   });
  // });
  // position.addEventListener(console.log);
  // console.log('rendered', position);
  // const scaleY = Animated.interpolateNode(position, {
  //   inputRange: inputAr,
  //   outputRange: [1, 0.7, 0.7, 1].concat(
  //     tabArr.map((_, i) => [0.7, 0.7, 1]).flat(),
  //   ),
  //   extrapolate: 'clamp',
  // });
  const scaleX = Animated.interpolateNode(position, {
    inputRange: inputAr,
    outputRange: [1, 2, 1, 1].concat(tabArr.map((_, i) => [2, 1, 1]).flat()),
    extrapolate: 'clamp',
  });

  const height = React.useRef(
    Animated.interpolateNode(position, {
      inputRange: inputAr,
      outputRange: [
        1 * 34 * heightRef,
        0.7 * 34 * heightRef,
        0.7 * 34 * heightRef,
        1 * 34 * heightRef,
      ].concat(
        tabArr
          .map((_, i) => [
            0.7 * 34 * heightRef,
            1 * 34 * heightRef,
            1 * 34 * heightRef,
          ])
          .flat(),
      ),
      extrapolate: 'clamp',
    }),
  ).current;

  const width = React.useRef(
    Animated.interpolateNode(position, {
      inputRange: inputAr,
      outputRange: [
        1 * 139 * widthRef,
        2 * 139 * widthRef,
        1 * 139 * widthRef,
        1 * 139 * widthRef,
      ].concat(
        tabArr
          .map((_, i) => [
            2 * 139 * widthRef,
            1 * 139 * widthRef,
            1 * 139 * widthRef,
          ])
          .flat(),
      ),
      extrapolate: 'clamp',
    }),
  ).current;
  const border = Animated.interpolateNode(position, {
    inputRange: inputAr,
    outputRange: [25, 5, 15, 5].concat(
      tabArr.map((_, i) => [5, 15, 25]).flat(),
    ),
    extrapolate: 'clamp',
  });
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: '#F6F6F6',
        backgroundColor: primary,
        paddingBottom: 5 * heightRef,
        overflow: 'hidden',
        paddingHorizontal: 10 * widthRef,
      }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center', marginBottom: 10}}
        ref={scrollListReftop}>
        <Animated.View
          style={{
            backgroundColor: secondary,
            borderRadius: 20,
            height,
            width,

            position: 'absolute',
            // width: 139 * widthRe
            transform: [{translateX}],
          }}
        />
        {tabs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate(item.name);
              }}
              style={{
                width: 139 * widthRef,
                // backgroundColor: state.index == index ? secondary : primary,
                height: 34 * heightRef,
                justifyContent: 'center',
                alignItems: 'center',
                // marginBottom: 10,
                borderRightWidth: 0,
                borderColor: secondary,
                borderRadius: 20,
                // backgroundColor: 'red',
              }}>
              <MaskedView
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  height: '100%',
                  alignItems: 'center',
                }}
                maskElement={
                  <View
                    style={{
                      // Transparent background because mask is based off alpha channel.d
                      backgroundColor: 'transparent',
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 18 * heightRef,
                        // color: state.index == index ? primary : secondary,
                        color: 'black',
                        fontWeight: 'bold',
                        textAlignVertical: 'center',
                        // opacity,
                      }}>
                      {state.routes[index].name}{' '}
                    </Text>
                  </View>
                }>
                <View
                  style={{
                    backgroundColor: secondary,
                    width: '100%',
                    height: '100%',
                  }}>
                  <Animated.View
                    style={{
                      backgroundColor: primary,
                      height,
                      width,
                      left: -index * 139 * widthRef,
                      transform: [{translateX}],
                    }}
                  />
                </View>
              </MaskedView>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default StickyTabBar;
