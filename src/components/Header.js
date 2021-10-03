import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {heightRef} from '../constants/screenSize';

const Header = props => {
  const inset = useSafeAreaInsets();
  const nav = useNavigation();
  return (
    <View>
      <View style={{height: inset.top}} />
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="rgba(255,255,255,0.2)"
      />
      <View style={{paddingHorizontal: 20 * heightRef}}>
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}>
          <Text style={{color: 'blue'}}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
