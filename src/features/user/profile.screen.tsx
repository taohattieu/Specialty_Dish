import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [avatar, setAvatar] = useState('');
  const [coverImage, setCoverImage] = useState('');

  interface UserInfo {
    displayName: string;
    address: string;
    email: string;
    phone: string;
    avatar: string;
    coverImage: string;
  }

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
      if (!accessToken) {
        console.error('Access token is not available');
        return;
      }
      // console.log('Access Token:', accessToken);

      const response = await axios.get('https://zgnj25mm-8080.asse.devtunnels.ms/profile/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // console.log('Response data:', response.data);

      if (response.data) {
        setUserInfo(response.data);
      } else {
        console.error('Invalid response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchUserInfo();
    }
  }, [isFocused]);

  const handleImagePress = () => {
    setSelectedType('image');
    setModalVisible(true);
  };

  const handleAvatarPress = () => {
    setSelectedType('avatar');
    setModalVisible(true);
  };

  const chooseMedia = () => {
    setModalVisible(!modalVisible);

    if (selectedType === 'avatar') {
      ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
        freeStyleCropEnabled: true,
        cropperCircleOverlay: true,
      }).then(avatar => {
        setAvatar(avatar.path);
      });
    } else if (selectedType === 'image') {
      ImagePicker.openPicker({
        width: 700,
        height: 500,
        cropping: true,
        freeStyleCropEnabled: true,
      }).then(selectedImage => {
        setCoverImage(selectedImage.path);
      });
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.7, borderBottomWidth: 0.7 }}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={{ uri: userInfo.coverImage }} style={{ width: '100%', height: '100%', opacity: 0.7 }} />
        </TouchableOpacity>
        <View style={{ marginVertical: 80, position: 'absolute', alignSelf: 'center' }}>
          <TouchableOpacity onPress={handleAvatarPress}>
            <Image
              source={{ uri: userInfo.avatar }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 1.5,
                borderColor: 'blue',
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          <Text style={{ color: '#000', textAlign: 'center', fontSize: 20 }}>Xin chào:</Text>
          <Text style={{ color: '#000', textAlign: 'center', fontSize: 20 }}>{userInfo.displayName}</Text>
        </View>
      </View>

      <View style={{ flex: 0.2, borderBottomWidth: 0.3 }}>
        <View style={{ marginVertical: 16 }}>
          <Text style={{ fontSize: 20, color: '#000', textAlign: 'center', fontWeight: 'bold' }}>
            Thông tin cá nhân
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 14, marginVertical: 14 }}>
          <Text style={{ fontSize: 18, color: '#000', marginVertical: 10 }}>
            Họ và tên: {userInfo.displayName}
          </Text>
          <Text style={{ fontSize: 18, color: '#000', marginVertical: 10 }}>
            Địa chỉ: {userInfo.address}
          </Text>
          <Text style={{ fontSize: 18, color: '#000', marginVertical: 10 }}>
            Email: {userInfo.email}
          </Text>
          <Text style={{ fontSize: 18, color: '#000', marginVertical: 10 }}>
            Số điện thoại: {userInfo.phone}
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
        onPress={handleLogout}
          style={{
            backgroundColor: '#dddddd',
            height: 45,
            justifyContent: 'center',
            marginHorizontal: 16,
            borderRadius: 10,
          }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#000' }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationIn={'zoomInUp'}
        animationOut={'zoomOutDown'}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}>
        <View>
          <View
            style={{
              backgroundColor: '#ed9',
              padding: 20,
              borderRadius: 10,
              height: 150,
            }}>
            <TouchableOpacity>
              <Icon name="user" size={30} color={'#000'} />
              <Text
                style={{
                  position: 'absolute',
                  marginHorizontal: 30,
                  fontSize: 20,
                  color: '#000',
                }}>
                {selectedType === 'avatar' ? 'Xem ảnh đại diện' : 'Xem ảnh bìa'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={chooseMedia}>
              <Icon2
                name="file-image-o"
                size={24}
                color={'#000'}
                style={{ left: 5, marginTop: 15 }}
              />
              <Text
                style={{
                  position: 'absolute',
                  marginHorizontal: 30,
                  fontSize: 20,
                  marginTop: 15,
                  color: '#000',
                }}>
                {selectedType === 'avatar' ? 'Thay đổi ảnh đại diện' : 'Thay đổi ảnh bìa'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                backgroundColor: '#45f',
                width: 70,
                height: 35,
                borderRadius: 8,
                alignSelf: 'flex-end',
                marginHorizontal: 8,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  top: 5,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
