import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

interface UserInfo {
  displayName: string;
  address: string;
  email: string;
  phone: string;
  avatar: string;
  coverImage: string;
}

const InfoUser: React.FC = () => {
  const { goBack } = useNavigation<any>();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    displayName: '',
    address: '',
    email: '',
    phone: '',
    avatar: '',
    coverImage: '',
  });

  const fetchUserInfo = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('userToken');
      const response = await axios.get('https://zgnj25mm-8080.asse.devtunnels.ms/profile/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const updateUserInfo = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('userToken');
      await axios.patch(
        'https://zgnj25mm-8080.asse.devtunnels.ms/profile/me',
        {
          displayName: userInfo.displayName,
          address: userInfo.address,
          email: userInfo.email,
          phone: userInfo.phone,
          avatar: userInfo.avatar,
          coverImage: userInfo.coverImage,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      Alert.alert('Thông báo', 'Cập nhật thông tin thành công');
      goBack();
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 25 }}>
          Cập nhật thông tin cá nhân
        </Text>
      </View>
      <View style={styles.editableInfo}>
        <TextInput
          placeholder="Tên hiển thị"
          style={styles.input}
          value={userInfo.displayName}
          onChangeText={text => setUserInfo({ ...userInfo, displayName: text })}
        />
        <TextInput
          placeholder="Địa chỉ"
          style={styles.input}
          value={userInfo.address}
          onChangeText={text => setUserInfo({ ...userInfo, address: text })}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={userInfo.email}
          onChangeText={text => setUserInfo({ ...userInfo, email: text })}
        />
        <TextInput
          placeholder="Số điện thoại"
          style={styles.input}
          value={userInfo.phone}
          onChangeText={text => setUserInfo({ ...userInfo, phone: text })}
        />
        <TextInput
          placeholder="Link ảnh đại diện"
          style={styles.input}
          value={userInfo.avatar}
          onChangeText={text => setUserInfo({ ...userInfo, avatar: text })}
        />
        <TextInput
          placeholder="Link ảnh bìa"
          style={styles.input}
          value={userInfo.coverImage}
          onChangeText={text => setUserInfo({ ...userInfo, coverImage: text })}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={styles.buttonText}>Quay lại</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={updateUserInfo}>
            <Text style={styles.buttonText}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff'
  },
  editableInfo: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: '#0c66e4',
    color: '#fff',
    textAlign: 'center',
  },
});

export default InfoUser;
