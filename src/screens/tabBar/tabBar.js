import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SCreen from './screen';
import StickyTabBar from './stickyTab';
const Tab = createMaterialTopTabNavigator();

const TabBarScreen = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const scrollListReftop = React.useRef();
  console.log('rendered TABBAR');
  const type = props.route.params.type;
  const tabs = [
    {
      name: 'Tab1',
      screen: SCreen,
      color: 'red',
    },
    {
      name: 'Tab2',
      screen: SCreen,
      color: 'yellow',
    },
    {
      name: 'Tab3',
      screen: SCreen,
      color: 'green',
    },
    {
      name: 'Tab4',
      screen: SCreen,
      color: 'orange',
    },
    {
      name: 'Tab5',
      screen: SCreen,
      color: 'blue',
    },
  ];
  const RenderTabBar = React.useMemo(() => {
    switch (type) {
      case 0:
        return StickyTabBar;
        break;

      default:
        break;
    }
  }, []);
  return (
    <View style={{height: '100%'}}>
      <View
        style={{height: 29, width: '100%', backgroundColor: '#39444F'}}></View>
      <Tab.Navigator
        initialRouteName="All"
        tabBar={props => <RenderTabBar tabs={tabs} {...props} />}>
        {tabs.map(tab => {
          return (
            <Tab.Screen
              name={tab.name}
              initialParams={{color: tab.color, heading: tab.name}}
              component={tab.screen}
            />
          );
        })}
      </Tab.Navigator>
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

export default TabBarScreen;
