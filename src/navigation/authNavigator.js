import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInWelcome from '../screens/authscreen/SignInWelcome';
import SignInScreen from '../screens/authscreen/SignInScreen';
import RootClientTabs from './ClientTabs';
import RestaurantMap from '../screens/RestaurantMap';
import DrawerNavigation from './DrawerNavigation';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="SignInWelcome" component={SignInWelcome} />
      <Auth.Screen name="SignIn" component={SignInScreen} />
      <Auth.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Auth.Screen name="RestaurantMap" component={RestaurantMap} />
    </Auth.Navigator>
  );
}
