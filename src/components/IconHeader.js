//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, title} from '../global/styles';
import {Icon} from '@rneui/themed';

// create a component
const IconHeader = ({title, iconName}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        type="material-community"
        color={colors.white}
        size={25}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    alignContent: 'flex-start',
    borderRadius: 10,
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
    marginLeft: 8,
  },
});

//make this component available to the app
export default IconHeader;
