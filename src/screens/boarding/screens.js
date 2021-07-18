//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Screens = ({image, heading, description, backgroundColor}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor,
          // flex: 1,
        }}>
        <View
          style={{
            flex: 2,
            height: '80%',
            width: '80%',
            // backgroundColor: 'red',s
          }}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
            }}
            source={image}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 30,
            // backgroundColor: 'red',
            flex: 1,
            top: '3%',
          }}>
          <Text style={{fontSize: 20, fontWeight: '800'}}>
            {heading.toUpperCase()}
          </Text>
          <Text style={{fontSize: 14, textAlign: 'center'}}>{description}</Text>
        </View>
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
  },
});

//make this component available to the app
export default Screens;
