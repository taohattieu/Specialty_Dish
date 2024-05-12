import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Keyboard,
  Alert,
  Image,
} from 'react-native';

const Register = () => {
  const navigation = useNavigation<any>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showUsernamePassword, setShowUsernamePassword] = useState(true);

  const validateUsername = (username: string) => {
    return username.trim() !== '';
  };

  const handleRegister = async () => {
    if (showUsernamePassword) {
      if (!validateUsername(username)) {
        Alert.alert('Thông báo', 'Tên đăng nhập không được để trống');
        return;
      }

      if (password.trim() === '') {
        Alert.alert('Thông báo', 'Password không được để trống!');
        return;
      }

      setShowUsernamePassword(false);
      setShowPersonalInfo(true);
    } else {
      try {
        const response = await axios.post(
          'https://zgnj25mm-8080.asse.devtunnels.ms/auth/register',
          {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            address: address,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        console.log(response.data);
        navigation.navigate('Login');
        Alert.alert('Thông báo', 'Đăng ký thành công!');
      } catch (error) {
        Alert.alert('Thông báo', 'Tên đăng nhập đã tồn tại!');
      }
    }
  };

  const handleBack = () => {
    setShowPersonalInfo(false);
    setShowUsernamePassword(true);
  };

  return (
    <View style={{justifyContent: 'center'}}>
      <View>
        <Image
          source={require('../../img/banner1.jpg')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View
        style={{
          borderWidth: 0.3,
          borderRadius: 8,
          marginVertical: 10,
          marginHorizontal: 10,
          backgroundColor: '#fffaf0',
          width: '95%',
          position: 'absolute',
        }}>
        <View style={{}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Đăng ký
          </Text>
          {showUsernamePassword && (
            <>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
                style={{
                  borderWidth: 0.5,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />

              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                autoCorrect={false}
                secureTextEntry={true}
                style={{
                  borderWidth: 0.5,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />

              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0c66e4',
                    borderRadius: 10,
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 45,
                    justifyContent: 'center',
                  }}
                  onPress={handleRegister}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      color: '#000000',
                    }}>
                    Tiếp tục
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {showPersonalInfo && (
            <>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  marginHorizontal: 16,
                  marginVertical: 12,
                  zIndex: 1,
                }}
                onPress={handleBack}>
                <Icon name='arrow-back' size={25}/>
              </TouchableOpacity>
              <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={text => setFirstName(text)}
                style={{
                  borderWidth: 0.5,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />
              <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={text => setLastName(text)}
                style={{
                  borderWidth: 0.5,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />
              <TextInput
                placeholder="Address"
                value={address}
                onChangeText={text => setAddress(text)}
                style={{
                  borderWidth: 0.5,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />

              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#0c66e4',
                    borderRadius: 10,
                    marginVertical: 10,
                    marginHorizontal: 10,
                    height: 45,
                    justifyContent: 'center',
                  }}
                  onPress={handleRegister}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      color: '#000000',
                    }}>
                    Đăng ký
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <Text
              style={{textAlign: 'right', fontStyle: 'italic', fontSize: 18}}>
              Bạn đã có tài khoản?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={{color: '#0c66e4', fontSize: 18}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Register;
