import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppDashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default AppDashboard

const styles = StyleSheet.create({})