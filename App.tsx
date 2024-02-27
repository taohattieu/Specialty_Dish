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
import Login from './src/features/profile/login.screen';


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
        <MainStack />
        {/* <Login/> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
