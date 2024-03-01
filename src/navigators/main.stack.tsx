import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppDashboard from './app.dashboard';
import HomeScreen from '../features/home/home.screen';
import Profile from '../features/profile/profile.screen';
import Specialty from '../features/specialty/specialty.screen';
import DetailsSpecialty from '../features/specialty/details-specialty.screen';
// import {NavigatorContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppDashboard" component={AppDashboard}/>
        <Stack.Screen name="Specialty" component={Specialty}/>
        <Stack.Screen name="DetailsSpecialty" component={DetailsSpecialty}/>
        <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>

  );
};

export default MainStack
