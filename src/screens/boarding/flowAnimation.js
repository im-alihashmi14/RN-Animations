/* eslint-disable react-native/no-inline-styles */
//import liraries
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Animated, {
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../constants/screenSize';

import MaskedView from '@react-native-community/masked-view';

const MaskedComponent = ({children, radius}) => {
  const size = 100;
  return (
    <MaskedView
      renderToHardwareTextureAndroid
      style={{flex: 1, flexDirection: 'row', height: '100%'}}
      maskElement={
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: size,
              width: size,
              backgroundColor: 'black',
            }}></View>
        </View>
      }>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        {children}
      </View>
    </MaskedView>
  );
};

// create a component
const FlowAnimation = () => {
  const screens = [
    {
      image:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9iOcV7gTgof91iAMc8oAt3CspvRbb_JfqGZ9keXAflzRfGMOj',
    },
    {
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS61fdKkVcQIKtObjNGAELqVwyzhwFoIfNGZVbC-rqta12xBfLa',
    },
    {
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTh6DdPBhzs5OuDYGiYTqRh6YyLWQV8bUOuL7d0TBD8o9zk15fq',
    },
    {
      image:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQP0Muvnt1DiGSKwG4LGy-KP0BeAspCzmjdPW2l2cLP13hHh0Cp',
    },
  ];
  // const screens = [
  //   {
  //     text: 'Screen 1',
  //     screen: (
  //       <View
  //         style={{
  //           width: '100%',
  //           height: '100%',
  //           backgroundColor: 'red',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>

  //       </View>
  //     ),
  //   },
  //   {
  //     text: 'Screen 2',
  //     screen: (
  //       <View
  //         style={{
  //           width: '100%',
  //           height: '100%',
  //           backgroundColor: 'orange',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>

  //       </View>
  //     ),
  //   },
  //   {
  //     text: 'Screen 3',
  //     screen: (
  //       <View
  //         style={{
  //           width: '100%',
  //           height: '100%',
  //           backgroundColor: 'green',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>

  //       </View>
  //     ),
  //   },
  // ];
  const scrollOffset = useSharedValue(1);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.x + 1;
    },
  });

  return (
    <View style={styles.container}>
      {screens.map((item, id) => {
        return (
          <Animated.View
            style={[
              {
                height: '100%',
                width: fullWidth,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                // zIndex: -10 + screens.length - id,
              },
              useAnimatedStyle(() => {
                let index = id;
                if (
                  scrollOffset.value >
                    (index + 1) * fullWidth + fullWidth / 2 &&
                  scrollOffset.value <= (index + 1) * fullWidth
                )
                  return {zIndex: 10};
                else if (
                  scrollOffset.value > index * fullWidth + fullWidth / 2 &&
                  scrollOffset.value <= (index + 1) * fullWidth
                )
                  return {zIndex: 0};
                else return {zIndex: -10};
              }),
            ]}>
            <MaskedView
              renderToHardwareTextureAndroid
              style={{flex: 1, flexDirection: 'row', height: '100%'}}
              maskElement={
                <View
                  style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Animated.View
                    style={[
                      {
                        height: 80,
                        width: 80,
                        borderRadius: 80,
                        backgroundColor: 'black',
                        position: 'absolute',
                        bottom: 60,
                      },
                      useAnimatedStyle(() => {
                        let index = id - 1;
                        if (
                          scrollOffset.value >
                            (index + 1) * fullWidth + fullWidth / 2 &&
                          scrollOffset.value <= (index + 2) * fullWidth
                        )
                          return {
                            transform: [
                              {
                                perspective: 400,
                              },
                              {
                                rotateY: `${Animated.interpolate(
                                  scrollOffset.value,
                                  [
                                    (index + 1.5) * fullWidth,
                                    (index + 2) * fullWidth,
                                  ],
                                  [-90, -180],
                                  'clamp',
                                )}deg`,
                              },
                              {
                                scale: Animated.interpolate(
                                  scrollOffset.value,
                                  [
                                    (index + 1.5) * fullWidth,
                                    (index + 2) * fullWidth,
                                  ],
                                  [10, 0],
                                  'clamp',
                                ),
                              },
                            ],
                          };
                        else if (
                          scrollOffset.value > index * fullWidth &&
                          scrollOffset.value <=
                            index * fullWidth + fullWidth / 2
                        )
                          return {
                            transform: [
                              {
                                perspective: 400,
                              },
                              {
                                rotateY: `${Animated.interpolate(
                                  scrollOffset.value,
                                  [
                                    index * fullWidth,
                                    (index + 0.5) * fullWidth,
                                  ],
                                  [0, -90],
                                  'clamp',
                                )}deg`,
                              },
                              {
                                scale: Animated.interpolate(
                                  scrollOffset.value,
                                  [
                                    index * fullWidth,
                                    (index + 0.5) * fullWidth,
                                  ],
                                  [0, 10],
                                  'clamp',
                                ),
                              },
                            ],
                          };
                        else if (scrollOffset.value <= index * fullWidth)
                          return {
                            transform: [
                              {scale: 0},
                              {
                                perspective: 400,
                              },
                            ],
                          };
                        else if (scrollOffset.value > (index + 1) * fullWidth)
                          return {
                            transform: [
                              {
                                perspective: 400,
                              },
                              {scale: 20},
                            ],
                          };
                        else
                          return {
                            transform: [
                              {
                                perspective: 400,
                              },
                              {scale: 20},
                            ],
                          };
                      }, []),
                    ]}
                  />
                </View>
              }>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'cover',
                  }}
                  source={{uri: screens[id].image}}
                />
                <View
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 80,
                    // backgroundColor: 'yellow',
                    position: 'absolute',
                    bottom: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}></View>
                {/* {console.log(renderScreen)} */}
                {/* {screens[(scrollOffset.value + fullWidth) / fullWidth].screen} */}
              </View>
            </MaskedView>
          </Animated.View>
        );
      })}
      <Animated.ScrollView
        horizontal
        onScroll={scrollHandler}
        style={{zIndex: 100}}
        snapToInterval={fullWidth}
        decelerationRate={20}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          width: screens.length * fullWidth,
        }}></Animated.ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  absoluteView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
});

//make this component available to the app
export default FlowAnimation;
