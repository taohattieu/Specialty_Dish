import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppDashboard from './app.dashboard';
import HomeScreen from '../features/home/home.screen';
import Profile from '../features/user/profile.screen';
import Specialty from '../features/specialty/specialty.screen';
import DetailsSpecialty from '../features/specialty/details-specialty.screen';
import Login from '../features/user/login.screen';
import Register from '../features/user/register.screen';
import FavoritesScreen from '../features/favorites/favorites.screen';
// import {NavigatorContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="AppDashboard" component={AppDashboard}/>
        <Stack.Screen name="Specialty" component={Specialty}/>
        <Stack.Screen name="DetailsSpecialty" component={DetailsSpecialty}/>
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>

  );
};

export default MainStack
