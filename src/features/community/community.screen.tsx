import {View, Text, Image, TouchableOpacity, ScrollView, Alert, Modal} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';

const CommunityScreen = () => {
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState('false');
  const [image, setImage] = useState('');

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  return (
    <>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}
          style={{borderWidth: 1.5, borderRadius: 50, borderColor: 'blue'}}>
          <Image
            source={require('../../img/provinces/hoian.jpg')}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            flex: 1,
            borderRadius: 25,
            justifyContent: 'center',
            marginHorizontal: 10,
            borderWidth: 0.3,
            borderColor: 'blue',
          }}>
          <Text style={{marginHorizontal: 10}}>Bạn đang nghĩ gì?</Text>
        </TouchableOpacity>

        {/* chon ảnh từ thư viện */}
        <TouchableOpacity
          onPress={chooseImage}
          style={{
            marginHorizontal: 8,
            justifyContent: 'center',
          }}>
          <Icon2 name="images-outline" size={27} style={{color: '#20d'}} />
          <Text style={{textAlign: 'center', fontSize: 16, color: '#000'}}>
            Ảnh
          </Text>
        </TouchableOpacity>
        <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>

        </Modal>
      </View>
      <ScrollView>
        <View
          style={{
            // borderWidth: 0.3,
            backgroundColor: '#fff',
            borderRadius: 10,
            marginHorizontal: 8,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                source={require('../../img/provinces/hue.jpg')}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    marginVertical: 5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  User Name
                </Text>
              </TouchableOpacity>
              <Text>12h ago</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row-reverse',
              // backgroundColor: '#f00',
              position: 'absolute',
              alignSelf: 'flex-end',
            }}>
            <Image
              source={require('../../img/more-icon.png')}
              style={{
                width: 30,
                height: 30,
                marginHorizontal: 15,
                marginVertical: 10,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              // backgroundColor: '#ff0',
              marginHorizontal: 16,
            }}>
            <Text style={{fontSize: 16}}>Hello</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../img/specialty/BanhCong.jpg')}
                style={{
                  width: '100%',
                  height: 200,
                  // marginHorizontal: 10,
                  marginVertical: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#ddd',
                marginHorizontal: 20,
                marginVertical: 10,
                flexDirection: 'row',
                // borderWidth: 0.3,
                borderRadius: 8,
                width: '25%',
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16}}>10k </Text>
              <TouchableOpacity style={{}}>
                <Icon name="hearto" size={18} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: '#ddd',
                flexDirection: 'row',
                marginHorizontal: 10,
                marginVertical: 10,
                // borderWidth: 0.3,
                borderRadius: 8,
                width: '25%',
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16}}>1.5k </Text>
              <TouchableOpacity>
                <Icon1 name="comment-alt" size={18} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: '#ddd',
                flexDirection: 'row',
                marginHorizontal: 10,
                marginVertical: 10,
                // borderWidth: 0.3,
                borderRadius: 8,
                width: '25%',
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16}}>12k </Text>
              <TouchableOpacity>
                <Icon2 name="arrow-redo-sharp" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CommunityScreen;
