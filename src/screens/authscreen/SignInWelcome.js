//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {colors} from '../../global/styles';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const {width, height} = Dimensions.get('window');
import products from '../../global/product';
import PressableButton from '../../components/Button';
const SignInWelcome = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.child}>
        <Image source={{uri: item?.image}} style={styles.image} />
        {/* <Text style={styles.text}>{item.name}</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.textview}>
        <Text style={styles.text1}>DISCOVER RESTAURANT</Text>
        <Text style={styles.text1}>IN YOUR AREA</Text>
      </View>
      <View style={styles.cardView}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
          paginationActiveColor={'#ff8c52'}
          paginationDefaultColor={'#000000'}
          data={products}
          renderItem={renderItem}
          keyExtractor={products => products.id.toString()}
        />
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <PressableButton
          text={'Sign In'}
          onPress={() => navigation.navigate('SignIn')}
        />
        <PressableButton
          text={'Create New Account'}
          customStyle={styles.customStyle}
          customTextStyle={styles.customTextStyle}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textview: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  text1: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '600',
  },
  cardView: {
    // flex: 4,
    justifyContent: 'center',
  },
  child: {
    width,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
    borderColor: colors.buttons,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    marginBottom: 10,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: colors.buttons,
    textAlign: 'center',
  },
  customStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    marginTop: 10,
    borderColor: colors.black,
  },
  customTextStyle: {
    color: colors.black,
  },
});

//make this component available to the app
export default SignInWelcome;
