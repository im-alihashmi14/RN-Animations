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
import {heightRef} from '../../constants/screenSize';
import Header from '../../components/Header';
const Tab = createMaterialTopTabNavigator();

const PanGesture = props => {
  const types = [
    {
      id: 0,
      name: 'Light Bulb',
      screen: 'LightBulb',
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
        {types.map(item => (
          <TouchableNativeFeedback
            key={item.name}
            useForeground
            onPress={() => {
              props.navigation.navigate(item.screen);
            }}>
            <View style={styles.button}>
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
  button: {
    height: 50 * heightRef,
    width: '90%',
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default PanGesture;
