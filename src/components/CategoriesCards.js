//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {colors} from '../global/styles';

// create a component
const CategoriesCards = ({item, selectIndex, setSelectIndex}) => {
  return (
    <Pressable onPress={() => setSelectIndex(item.id)}>
      <View style={styles.cardView}>
        <Image source={item.image} style={styles.image} />
        <Text
          style={
            selectIndex === item.id
              ? {...styles.selectTitle}
              : {...styles.title}
          }>
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  cardView: {
    margin: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
  },
  selectTitle: {
    fontSize: 16,
    color: colors.buttons,
    fontWeight: '800',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 40,
  },
});

//make this component available to the app
export default CategoriesCards;
