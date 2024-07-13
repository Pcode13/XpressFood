import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import Home from '../screens/Home';
import OrderScreen from '../screens/OrdersScreen';
import SearchScreen from '../screens/SearchScreen';
import MyAccount from '../screens/MyAccount';
import {colors} from '../global/styles';
const Tab = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.buttons,
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'My Account',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
