//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameters} from '../global/styles';
import {Icon} from '@rneui/themed';
// create a component
const Header = ({title, onPress, type}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 10}}>
        <Icon
          type="material-community"
          name={type}
          size={30}
          color={colors.white}
          onPress={onPress}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    alignContent: 'center',
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 90,
  },
});

//make this component available to the app
export default Header;
