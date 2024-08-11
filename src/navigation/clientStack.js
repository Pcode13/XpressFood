import React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchScreen/SearchResultScreen';

const clientSearch = createNativeStackNavigator();

export default function ClientStack() {
  return (
    <clientSearch.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <clientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={
          () => ({
            headerShown: false
          })
        } />

      <clientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={
          () => ({
            headerShown: false
          })
        } />

    </clientSearch.Navigator>
  );
}
