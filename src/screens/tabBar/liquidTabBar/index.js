/* eslint-disable react-native/no-inline-styles */
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
import {fullWidth, heightRef, widthRef} from '../../../constants/screenSize';
import MaskedView from '@react-native-community/masked-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LiquidTab from './liquidTab';
function LiquidTabBar({
  state,
  descriptors,
  navigation,
  position,
  tabs: tabScreen,
}) {
  const cartRef = React.useRef(null);
  const scrollListReftop = useAnimatedRef(null);
  // const secondary = '#A4FFEB';
  const primary = '#A4FFEB';
  const tabs = React.useMemo(() => {
    return [
      {
        outlineIcon: (
          <Ionicons
            name="bookmark-outline"
            size={25 * heightRef}
            color="black"
          />
        ),
        solidIcon: (
          <Ionicons name="bookmark" size={25 * heightRef} color="black" />
        ),
      },

      {
        outlineIcon: (
          <Ionicons
            name="ios-heart-outline"
            size={25 * heightRef}
            color="black"
          />
        ),
        solidIcon: (
          <Ionicons
            name="ios-heart-sharp"
            size={25 * heightRef}
            color="black"
          />
        ),
      },

      {
        outlineIcon: (
          <Ionicons name="home-outline" size={25 * heightRef} color="black" />
        ),
        solidIcon: (
          <Ionicons name="home-sharp" size={25 * heightRef} color="black" />
        ),
      },
      {
        outlineIcon: (
          <Ionicons
            name="ios-person-outline"
            size={25 * heightRef}
            color="black"
          />
        ),
        solidIcon: (
          <Ionicons name="ios-person" size={25 * heightRef} color="black" />
        ),
      },
      {
        outlineIcon: (
          <Ionicons name="cart-outline" size={25 * heightRef} color="black" />
        ),
        solidIcon: (
          <Ionicons name="cart-sharp" size={25 * heightRef} color="black" />
        ),
      },
    ];
  }, []);
  const iconWidth = React.useMemo(() => {
    return (fullWidth - 30 * widthRef) / tabs.length;
  }, []);
  console.log(iconWidth);
  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        // backgroundColor: '#F6F6F6',
        backgroundColor: primary,
        marginTop: 20 * heightRef,
        paddingBottom: 20 * heightRef,
        paddingHorizontal: 20 * heightRef,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: 'center',
      }}>
      {tabs.map((item, index) => {
        return (
          <LiquidTab
            {...{
              iconWidth,
              item,
              state,
              index,
              tabScreen,
              navigation,
              primary,
            }}
          />
        );
      })}
    </Animated.View>
  );
}

export default LiquidTabBar;
