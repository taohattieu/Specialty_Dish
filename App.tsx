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
import AppDashboard from './src/navigators/app.dashboard';
import MainStack from './src/navigators/main.stack';


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
        {/* <AppDashboard /> */}
        <MainStack />
        {/* <AppStack /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
