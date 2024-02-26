import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../features/home/home.screen';
import Profile from '../features/profile/profile.screen';
import NotificationScreen from '../features/notifications/notification.screen';
import CommentScreen from '../features/comments/comments.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Specialty from '../features/specialty/specialty.screen';
import CommunityScreen from '../features/community/community.screen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const AppDashboard = () => {
  return (
      <Tab.Navigator
        activeColor="#f00"
        inactiveColor="blue"
        // style={{ backgroundColor: 'tomato' }}

        barStyle={
          {
            // backgroundColor: '#0df',
          }
        }>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({focused}) => {
              return (
                <Icon name="house" size={16} color={focused ? 'red' : 'blue'} />
              );
            },

            tabBarColor: '#e70',
          }}
        />
        <Tab.Screen
          name="CommunityScreen"
          component={CommunityScreen}
          options={{
            tabBarLabel: 'Cộng đồng',
            tabBarIcon: ({focused}) => {
              return (
                <Icon2
                  name="account-group"
                  size={24}
                  color={focused ? 'red' : 'blue'}
                />
              );
            },
            tabBarColor: '#f0f',
          }}
        />
        <Tab.Screen
          name="comments"
          component={CommentScreen}
          options={{
            tabBarLabel: 'Đóng góp', 
            tabBarIcon: ({focused}) => {
              return (
                <Icon1
                name='pluscircle'
                size={18}
                color={focused ? 'red' : 'blue'}
                
                />
              )
            }
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="bell"
                  size={16}
                  color={focused ? 'red' : 'blue'}
                  solid
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Hồ sơ',
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name="user-large"
                  size={16}
                  color={focused ? 'red' : 'blue'}
                  solid
                />
              );
            },
            tabBarColor: '#0fe',
          }}
        />
      </Tab.Navigator>
  );
};

export default AppDashboard;
