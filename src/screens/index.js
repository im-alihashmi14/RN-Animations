/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {heightRef} from '../constants/screenSize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {Shadow} from 'react-native-neomorph-shadows-fixes';

const Tab = createMaterialTopTabNavigator();
const Initial = props => {
  const inset = useSafeAreaInsets();
  const tabTypes = [
    {
      id: 0,
      name: 'Tab Bar Animation',
      screen: 'TabBar',
    },
    {
      id: 1,
      name: 'Scroll/FlatList Animation',
      screen: 'Scroll',
    },
    {
      id: 2,
      name: 'Boarding Screen Animation',
      screen: 'Boarding',
    },
    {
      id: 3,
      name: 'Geometry Screen Animation',
      screen: 'Geometry',
    },
    {
      id: 4,
      name: 'PanGesture Animation',
      screen: 'PanGesture',
    },
  ];
  return (
    <View style={{height: '100%'}}>
      <Header />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          paddingVertical: 10,
        }}>
        {tabTypes.map(item => (
          <TouchableNativeFeedback
            key={item.name}
            useForeground
            onPress={() => {
              props.navigation.navigate(item.screen);
            }}>
            <View
              style={{
                height: 50 * heightRef,

                width: '90%',
                backgroundColor: 'white',
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                overflow: 'hidden',
                marginVertical: 5 * heightRef,
              }}>
              <Text>{item.name}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
        {/* <Shadow
          inner // <- enable inner shadow

          useArt // <- set this prop to use non-native shadow on ios
          style={{
            shadowOffset: {width: -5, height: 5},
            shadowOpacity: 1,
            shadowColor: 'grey',
            shadowRadius: 10,
            borderRadius: 20,
            backgroundColor: 'white',
            width: 100,
            height: 100,
            // ...include most of View/Layout styles
          }}></Shadow> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Initial;
