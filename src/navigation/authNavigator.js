import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInWelcome from '../screens/authscreen/SignInWelcome';
import SignInScreen from '../screens/authscreen/SignInScreen';
import Home from '../screens/Home';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="SignInWelcome" component={SignInWelcome} />
      <Auth.Screen name="SignIn" component={SignInScreen} />
      <Auth.Screen name="Home" component={Home} />
    </Auth.Navigator>
  );
}
