import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation<any>();
  const navigate = useNavigation<any>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Thông báo', 'Vui lòng nhập username và password');
      return;
    }

    try {
      const response = await axios.post(
        'https://zgnj25mm-8080.asse.devtunnels.ms/auth/login',
        {
          username: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      // console.log(response.data);
      await AsyncStorage.setItem('userToken', response.data.accessToken);
      navigation.navigate('AppDashboard');
    } catch (error) {
      // console.error(error);
      Alert.alert('Lỗi', 'Email hoặc Password không chính xác!');
    }
  };

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('userToken');
  //       // console.log(token);
  //       if (token) {
  //         navigation.navigate('AppDashboard');
  //       } else {
  //         navigation.navigate('Login');
  //       }
  //     } catch (error) {
  //       console.error('Error checking login status:', error);
  //     }
  //   };

  //   checkLoginStatus();
  // }, [navigate]);

  return (
    <>
      <View style={{justifyContent: 'flex-end'}}>
        <View style={{}}>
          {/* <Text style={{fontSize: 30, color: 'red'}}> Login</Text> */}
          <Image
            source={require('../../img/banner1.jpg')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            // backgroundColor: '#f5f5f5',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            width: '100%',
          }}>
          {/* <Text
            style={{
              fontSize: 25,
              marginHorizontal: 20,
              marginVertical: 20,
              color: 'red',
            }}>
            Đăng nhập
          </Text> */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fffaf0',
              justifyContent: 'space-around',
              borderRadius: 10,
              borderWidth: 0.5,
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                // backgroundColor: 'yellow',
                justifyContent: 'space-evenly',
              }}>
              <Text style={{color: '#000000'}}>Tên tài khoản</Text>
              <Text style={{color: '#000000'}}>Mật khẩu</Text>
            </View>
            <View
              style={{
                // backgroundColor: 'green',
                width: '65%',
                marginVertical: 10,
              }}>
              <TextInput
                style={{
                  borderWidth: 0.5,
                  width: '100%',
                  borderRadius: 10,
                  top: 15,
                }}
                value={username}
                onChangeText={text => setUsername(text)}
                placeholder=" Username"
              />
              <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                autoCorrect={false}
                secureTextEntry={true}
                style={{
                  borderWidth: 0.5,
                  width: '100%',
                  borderRadius: 10,
                  marginVertical: 20,
                  top: 8,
                }}
                placeholder=" Password"
              />
            </View>
          </View>
          <View style={{}}>
            <View>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  borderWidth: 0.5,
                  backgroundColor: '#0866ff',
                  marginHorizontal: 8,
                  height: 45,
                  justifyContent: 'center',
                }}
                onPress={handleLogin}>
                <Text
                  style={{fontSize: 24, textAlign: 'center', color: '#000000'}}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: 'flex-end',
              }}>
                <TouchableOpacity onPress={() => navigation.navigate('AppDashboard')}>
              <Text style={{fontSize: 18, fontStyle: 'italic'}}>
                Bạn chưa có tài khoản?{' '}
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                <Text style={{fontSize: 18, color: '#0866ff'}}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
