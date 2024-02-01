import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import HomeScreen from '../features/home/home.screen';
import Profile from '../features/profile/profile.screen';

const Tab = createMaterialBottomTabNavigator();
const AppDashboard = () => {
  return (

    <Tab.Navigator
      activeColor="#f00"
      inactiveColor="grey"
      screenOptions={{tabBarColor: '#ff0'}}
      // barStyle={{backgroundColor: '#0df'}}
      >
        
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon(props) {
            return <Icon name="house" size={16} color={props.color} />;
          },
          tabBarColor: '#0df',
          
        }}
      />
      <Tab.Screen
        name="Heart"
        component={Profile}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon(props) {
            return <Icon name="heart" size={16} color={props.color} solid/>;
          },
          tabBarColor: '#f0f',
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon(props) {
            return <Icon name="user" size={16} color={props.color} solid />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppDashboard;
