import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [avatar, setAvatar] = useState('https://imgur.com/H5PRmkk.png');
  const [image, setImage] = useState('https://imgur.com/tmrk6rn.png');

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
        setImage(selectedImage.path);
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.3}}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={{uri: image}}
            style={{width: '100%', height: '100%', opacity: 0.7}}
          />
        </TouchableOpacity>
        <View />
        <View
          style={{
            marginVertical: 80,
            marginHorizontal: 50,
            position: 'absolute',
            alignSelf: 'flex-end',
            right: 0,
          }}>
          <TouchableOpacity onPress={handleAvatarPress}>
            <Image
              source={{uri: avatar}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationIn={'zoomInUp'}
        animationOut={'zoomOutDown'}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}>
        <View style={{}}>
          <View
            style={{
              backgroundColor: '#ed9',
              padding: 20,
              borderRadius: 10,
              height: 150,
            }}>
            <TouchableOpacity style={{}}>
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

            <TouchableOpacity style={{}} onPress={chooseMedia}>
              <Icon2
                name="file-image-o"
                size={24}
                color={'#000'}
                style={{left: 5, marginTop: 15}}
              />
              <Text
                style={{
                  position: 'absolute',
                  marginHorizontal: 30,
                  fontSize: 20,
                  marginTop: 15,
                  color: '#000',
                }}>
                {selectedType === 'avatar'
                  ? 'Thay đổi ảnh đại diện'
                  : 'Thay đổi ảnh bìa'}
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
                marginVertical: 10
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
