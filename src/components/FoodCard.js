//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../global/styles';
import {Icon} from '@rneui/themed';
// create a component
const FoodCard = ({
  restaurantName,
  images,
  distance,
  faraway,
  businessAddress,
  image,
  averageReview,
  numberReview,
  coordinate,
  discount,
  deliveryTime,
  collectionTime,
  foodType,
  screenWidth,
}) => {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image style={{...styles.image, width: screenWidth}} source={images} />

        <View style={{marginBottom:5}}>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.distance}>
              <Icon
                name="map-marker"
                type="material-community"
                color={colors.red}
                size={20}
                iconStyle={{
                  marginTop: 3,
                }}
              />
              <Text style={styles.Min}>{faraway} Min</Text>
            </View>
            <View style={{flex: 9, flexDirection: 'row', marginLeft: 5}}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.averageReview}>{averageReview}</Text>
        <Text style={styles.numberReview}>{numberReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 5,
    marginHorizontal: 10,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 6,
    borderRightWidth: 2,
  },
  Min: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey2,
    marginTop: 2,
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 2,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52,52,52,0.3)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  averageReview: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: -3,
  },
  numberReview: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: colors.white,
    marginTop: -3,
  },
});

//make this component available to the app
export default FoodCard;

//
