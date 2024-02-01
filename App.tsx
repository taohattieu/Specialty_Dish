import {
  DevSettings,
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigators/main.stack';
import AppDashboard from './src/navigators/app.dashboard';
import Profile from './src/features/profile/profile.screen';
import HomeScreen from './src/features/home/home.screen';

const App = () => {
  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Bật debug', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(true);
      });
    }
  }, []);
  return (
    <SafeAreaView style={{ flex:1 }}>
      <NavigationContainer>
        {/* <MainStack /> */}
        <AppDashboard />
        {/* <Profile/> */}
        {/* <HomeScreen/> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
