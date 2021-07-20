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
import SCreen from './screen';
import StickyTabBar from './stickyTab';
import {heightRef} from '../../constants/screenSize';
const Tab = createMaterialTopTabNavigator();

const TabBar = props => {
  const tabTypes = [
    {
      id: 0,
      name: 'Sticky Tab Bar',
      position: 'top',
    },
    {
      id: 1,
      name: 'Droplet Tab Bar ',
      position: 'bottom',
    },
    {
      id: 2,
      name: 'Liquid Tab Bar',
      position: 'bottom',
    },
  ];
  return (
    <View style={{height: '100%'}}>
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
              props.navigation.navigate('TabBarAnimation', {
                type: item.id,
                position: item.position,
              });
            }}>
            <View
              style={{
                height: 50 * heightRef,
                marginTop: 5 * heightRef,
                width: '90%',
                backgroundColor: 'white',
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <Text>{item.name}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
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

export default TabBar;
