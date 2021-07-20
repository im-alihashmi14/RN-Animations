//import liraries
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {fullHeight, heightRef, widthRef} from '../../constants/screenSize';

// create a component
const CardHiding = () => {
  const HeaderHeight = 135;
  const card = {height: 170, width: 120};

  const scrollOffset = useSharedValue(0);
  const assets = {
    image: require('./../../assets/joker.jpeg'),
    poster: require('./../../assets/jokerPoster.jpg'),
    name: 'Joker',
    description:
      'Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.',
  };

  const relatedShows = [
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

  const animatedStyles = useAnimatedStyle(() => {
    return {
      borderRightWidth: HeaderHeight - scrollOffset.value,
      borderTopWidth: HeaderHeight - scrollOffset.value,
    };
  });
  const cardAnimatedStyles = useAnimatedStyle(() => {
    if (scrollOffset.value < 50)
      return {
        transform: [
          {
            rotateZ: `${
              scrollOffset.value * 2 * (scrollOffset.value > 25 ? -1 : 1) +
              (scrollOffset.value > 25 ? 1 : 0) * 90
            }deg`,
          },
        ],
        zIndex: scrollOffset.value > 25 ? 0 : 10,
        bottom: -scrollOffset.value,
      };
  });

  //   console.log(scrollOffset.value);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: fullHeight / 3,
          position: 'absolute',
          top: 0,
          left: 0,
        }}>
        <Image
          source={assets.poster}
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
        />
      </View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={{flex: 1, width: '100%'}}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{height: HeaderHeight}} />

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <Animated.View
            style={[
              {
                position: 'absolute',
                height: card.height * 2,
                width: card.width * 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                zIndex: 10,
                left: HeaderHeight - card.width,
                bottom: 0,
                borderRadius: 5,
              },
              cardAnimatedStyles,
            ]}>
            <View
              style={{
                // position: 'absolute',
                height: card.height,
                width: card.width,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                backgroundColor: 'red',
                borderRadius: 8,
                overflow: 'hidden',
                elevation: 15,
              }}>
              <Image
                source={assets.image}
                style={{height: '100%', width: '100%'}}
              />
            </View>
          </Animated.View>
          <Animated.View
            style={[
              {
                height: HeaderHeight,
                borderTopColor: 'transparent',
                borderRightColor: 'white',
              },
              animatedStyles,
            ]}
          />
          <Animated.View
            style={[
              {
                height: HeaderHeight,
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 20 * widthRef,
                alignItems: 'center',
                zIndex: 8,
              },
              useAnimatedStyle(() => {
                return {
                  transform: [
                    {
                      translateY:
                        scrollOffset.value > HeaderHeight
                          ? scrollOffset.value - HeaderHeight
                          : 0,
                    },
                  ],
                  height:
                    scrollOffset.value > HeaderHeight
                      ? scrollOffset.value < (5 / 3) * HeaderHeight
                        ? HeaderHeight * 2 - scrollOffset.value
                        : HeaderHeight / 3
                      : HeaderHeight,
                };
              }),
            ]}>
            <Text style={{fontSize: 40 * heightRef, fontWeight: 'bold'}}>
              {assets.name}
            </Text>
          </Animated.View>
        </View>
        <View
          style={{
            height: 1000,
            width: '100%',
            backgroundColor: 'white',
            bottom: 5,
            borderTopLeftRadius: 8,
            paddingVertical: 20 * heightRef,
            paddingHorizontal: 10 * widthRef,
          }}>
          <Text style={{fontSize: 20 * heightRef}}>{assets.description}</Text>
          <View>
            <Text style={{fontSize: 25 * heightRef, fontWeight: 'bold'}}>
              Related Shows
            </Text>
            <FlatList
              horizontal
              snapToInterval={130}
              data={relatedShows}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      height: 200,
                      width: 120,
                      backgroundColor: 'red',
                      marginHorizontal: 5,
                      marginVertical: 5,
                      borderRadius: 5,
                    }}>
                    <Image
                      style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'cover',
                      }}
                      source={{uri: item.image}}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>

        {/* <TouchableOpacity
          onPress={() => {
            if (width.value == 0) width.value = 100;
            else width.value = 0;
          }}
          style={{
            height: 50,
            width: '60%',
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            position: 'absolute',
            bottom: 10,
          }}>
          <Text style={{color: 'white'}}>Click me</Text>
        </TouchableOpacity> */}
      </Animated.ScrollView>
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
});

//make this component available to the app
export default CardHiding;
