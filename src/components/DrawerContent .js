//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, Pressable, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Button, Icon, Avatar} from '@rneui/themed';
import {colors} from '../global/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// create a component
const DrawerContents = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.profileView}>
          <Avatar
            rounded
            size={100}
            avatarStyle={styles.avatar}
            source={require('../assets/Image/pizza.png')}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.name}>Pragati veer</Text>
            <Text style={styles.email}>pragati.veer@gmail.com</Text>
          </View>
        </View>
        <View style={styles.numberView}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.name}>1</Text>
            <Text style={styles.email}>My Favorites</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.name}>0</Text>
            <Text style={styles.email}>shopping Cart</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label={'Payment'}
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={colors.black}
              size={size}
            />
          )}
        />

        <DrawerItem
          label={'Pramotions'}
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={colors.black}
              size={size}
            />
          )}
        />
        <DrawerItem
          label={'Settings'}
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog_outline"
              color={colors.black}
              size={size}
            />
          )}
        />
        <DrawerItem
          label={'help'}
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={colors.black}
              size={size}
            />
          )}
        />
      </DrawerContentScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 2,
    borderColor: colors.black,
  },
  name: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '700',
  },
  email: {
    fontSize: 14,
    color: Colors.black,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttons,
    paddingLeft: 5,
    paddingVertical: 10,
  },
  numberView: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    justifyContent: 'space-evenly',
    paddingVertical: 4,
  },
});

//make this component available to the app
export default DrawerContents;
