//import liraries
import React, {Component} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from '@rneui/themed';
import {colors} from '../global/styles';

import RootClientTabs from './ClientTabs';
import BusniessConsole from '../screens/DrawerScreens/BusniessConsole';
import DrawerContents from '../components/DrawerContent ';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContents {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.black,
        drawerActiveTintColor: colors.white,
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              type="material"
              color={focused ? colors.white : colors.black}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="BusniessConsole"
        component={BusniessConsole}
        options={{
          title: 'Business Console',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="domain"
              type="material-community"
              color={focused ? colors.white : colors.black}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
