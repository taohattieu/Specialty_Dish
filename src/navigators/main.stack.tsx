import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppDashboard from './app.dashboard';
import HomeScreen from '../features/home/home.screen';
import Profile from '../features/profile/profile.screen';
// import {NavigatorContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
   <SafeAreaView>
    <Stack.Navigator>
        <Stack.Screen name="AppDashboard" component={AppDashboard}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
   </SafeAreaView>
  );
};

export default MainStack
