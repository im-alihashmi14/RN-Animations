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

const Scroll = props => {
  const scrollTypes = [
    {
      id: 0,
      name: 'Card Hiding Header',
      screen: 'CardHiding',
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
        {scrollTypes.map(item => (
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

export default Scroll;
