import React,{useLayoutEffect} from 'react';
import { createNativeStackNavigator,TransitionPresets } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchScreen/SearchResultScreen';
import RestaurantHome from '../screens/RestaurantHomeScreen';


import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const clientSearch = createNativeStackNavigator();



  

export default function ClientStack({navigation,route}) {


  useLayoutEffect(()=>{
    const routeName = getFocusedRouteNameFromRoute(route);
    if(routeName === "RestaurantHome"||routeName === "MenuProductScreen"){
        navigation.setOptions({tabBarVisible:false})
    }else{
        navigation.setOptions({tabBarVisible:true})
    }
    },[navigation,route])


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

<clientSearch.Screen
        name="RestaurantHome"
        component={RestaurantHome}
        options={
          () => ({
            headerShown: false
          })
        } />
    </clientSearch.Navigator>
  );
}
