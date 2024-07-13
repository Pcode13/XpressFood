import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authNavigator'; 
import RootClientTabs from './ClientTabs';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
