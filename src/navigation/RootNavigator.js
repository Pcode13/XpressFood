import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authNavigator'; // Adjust the path as necessary

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
