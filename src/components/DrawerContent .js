//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, Pressable, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Button, Icon, Avatar, Switch} from '@rneui/themed';
import {colors} from '../global/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// create a component
const DrawerContents = props => {
  const [open, setOpen] = React.useState(false);
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
              name="cog"
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

        <View style={{borderTopWidth: 1, borderTopColor: colors.grey5}}>
          <Text style={styles.preferenceTxt}>Preference</Text>
          <View style={styles.switchView}>
            <Text style={styles.draktheme}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                value={open}
                onValueChange={setOpen}
                thumbColor={'#000000'}
                trackColor={{false: '#e1e8ee', true: '#e1e8ee'}}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label={'Sign out'}
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout"
            color={colors.black}
            size={size}
          />
        )}
      />
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
  switchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
  },
  preferenceTxt: {
    fontSize: 16,
    paddingTop: 20,
    color: colors.grey2,
    paddingLeft: 20,
    paddingRight: 5,
  },
  draktheme: {
    fontSize: 16,
    color: colors.grey2,
    paddingLeft: 20,
    fontWeight: 'bold',
    paddingTop: 10,
  },
});

//make this component available to the app
export default DrawerContents;
