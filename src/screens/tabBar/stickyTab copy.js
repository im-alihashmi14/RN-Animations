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
  const scrollListReftop = useAnimatedRef(null);
  const secondary = '#A4FFEB';
  const primary = '#39444F';
  // const val=new Animated.Value(0);
  // val.
  // let tabArr = [1, ...state.routes];
  let tabArr = state.routes;
  const inputAr = [-1, -0.8, -0.5, 0].concat(
    tabArr.map((_, i) => [i + 0.5, i + 0.8, i + 1]).flat(),
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
  const translateX = Animated.interpolateNode(position, {
    inputRange: inputAr,
    outputRange: [
      -1 * 139 * widthRef,
      -0.8 * 139 * widthRef,
      -0.5 * 139 * widthRef,
      0,
    ].concat(
      tabArr
        .map((_, i) => [
          (i + 0.5) * 139 * widthRef,
          (i + 0.8) * 139 * widthRef,
          (i + 1) * 139 * widthRef,
        ])
        .flat(),
    ),
    extrapolate: 'clamp',
  });
  // React.useEffect(() => {
  //   scrollListReftop?.current?.scrollTo({
  //     x: position.value * 139 * widthRef,
  //     y: 0,
  //     animated: false,
  //   });
  // });
  // position.addEventListener(console.log);
  // console.log('rendered', position);
  const scaleY = Animated.interpolateNode(position, {
    inputRange: inputAr,
    outputRange: [1, 0.7, 0.7, 1].concat(
      tabArr.map((_, i) => [0.7, 0.7, 1]).flat(),
    ),
    extrapolate: 'clamp',
  });
  const scaleX = Animated.interpolateNode(position, {
    inputRange: inputAr,
    outputRange: [1, 1.6, 1.6, 1].concat(
      tabArr.map((_, i) => [1.6, 1.6, 1]).flat(),
    ),
    extrapolate: 'clamp',
  });

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
        ref={scrollListReftop}>
        <Animated.View
          style={{
            backgroundColor: secondary,
            borderRadius: 20,
            height: 34 * heightRef,

            position: 'absolute',
            width: 139 * widthRef,
            transform: [{translateX: translateX}, {scaleX}, {scaleY}],
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
                // backgroundColor: state.index == index ? secondary : primary,
                height: 34 * heightRef,
                width: 139 * widthRef,
                justifyContent: 'center',
                alignContent: 'center',
                marginBottom: 10,
                borderRightWidth: 0,
                borderColor: secondary,
                borderRadius: 20,
              }}>
              <MaskedView
                style={{flex: 1, flexDirection: 'row', height: '100%'}}
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
                      {item.count > 0 ? (
                        <View
                          style={{
                            height: 10 * heightRef,
                            width: 10 * widthRef,
                            backgroundColor: 'black',
                            borderRadius: 10,
                          }}></View>
                      ) : null}
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
                      height: '100%',
                      width: 139 * widthRef,
                      left: -index * 139 * widthRef,
                      transform: [{translateX: translateX}, {scaleX}, {scaleY}],
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
