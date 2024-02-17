import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from  'react-native-vector-icons/FontAwesome';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleImagePress = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            backgroundColor: '#ed9',
            padding: 20,
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
            marginTop: 650,
          }}>
          <TouchableOpacity style={{marginVertical: 18}}>
            <Icon name="user" size={30} />
            <Text
              style={{
                position: 'absolute',
                marginHorizontal: 30,
                fontSize: 20,
              }}>
              Xem ảnh
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginVertical: 18}}>
            <Icon2 name="file-image-o" size={24} style={{left: 5}}/>
            <Text
              style={{
                position: 'absolute',
                marginHorizontal: 30,
                fontSize: 20,
              }}>
              Thay đổi ảnh
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              backgroundColor: '#45f',
              width: 80,
              height: 35,
              borderRadius: 8,
              alignSelf: 'flex-end',
              marginHorizontal: 20
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
      </Modal>

      <View style={{flex: 0.4}}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require('../../img/provinces/tphcm.png')}
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
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              source={require('../../img/provinces/hanoi.png')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default Profile;
