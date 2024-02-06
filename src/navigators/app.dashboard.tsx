import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import HomeScreen from '../features/home/home.screen';
import Profile from '../features/profile/profile.screen';
import FavoritesScreen from '../features/favorites/favorites.screen';
import NotificationScreen from '../features/notifications/notification.screen';

const Tab = createMaterialBottomTabNavigator();
const AppDashboard = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        activeColor="#f00"
        inactiveColor="blue"
        // style={{ backgroundColor: 'tomato' }}
        
        barStyle={{
          // backgroundColor: '#0df',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({focused}) => {
              return <Icon name="house" size={16} color={focused? 'red' : "blue"} />;
            },
            
            tabBarColor: '#e70',
          }}
        />
        <Tab.Screen
          name="Heart"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Yêu thích',
            tabBarIcon: ({focused}) => {
              return <Icon name="heart" size={16} color={focused? 'red' : "blue"} solid />;
            },
            tabBarColor: '#f0f',
          }}
        />
        <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({focused}) => {
            return <Icon name="bell" size={16} color={focused? 'red' : 'blue'} solid/>
          },
        }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Hồ sơ',
            tabBarIcon: ({focused}) => {
              return <Icon name="user-large" size={16} color={focused? 'red' : "blue"} solid />;
            },
            tabBarColor: '#0fe'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppDashboard;
