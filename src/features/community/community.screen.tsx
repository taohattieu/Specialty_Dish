import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Octicons';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
import Modal from 'react-native-modal';

const CommunityScreen = () => {
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('https://imgur.com/l8rDcuY.png');

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  const modalVisibles = () => {
    setModalVisible(!modalVisible);
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
            source={require('../../img/provinces/VinhPhuc.jpg')}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={modalVisibles}
          style={{
            backgroundColor: '#fff',
            flex: 1,
            borderRadius: 25,
            justifyContent: 'center',
            marginHorizontal: 10,
            borderWidth: 0.3,
            borderColor: 'blue',
          }}>
          <Text style={{marginHorizontal: 10, color: '#696969'}}>Bạn đang nghĩ gì?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={modalVisibles}
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
          animationIn={'zoomInUp'}
          animationOut={'zoomOutDown'}
          isVisible={modalVisible}
          onBackdropPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              marginVertical: 100,
              borderRadius: 10,
            }}>
            <View
              style={{
                height: 50,
                borderBottomWidth: 0.3,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{
                  marginHorizontal: 16,
                  alignSelf: 'center',
                }}>
                <Icon name="arrowleft" size={25} color={'red'} />
              </TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#696969'
                }}>
                Tạo bài viết
              </Text>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{textAlign: 'center', color: '#54f', fontSize: 18}}>
                  Cập nhật
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: '#fff',
                  height: 100,
                  marginHorizontal: 8,
                  marginVertical: 10,
                  borderRadius: 8,
                  borderWidth: 0.3,
                }}>
                <TextInput placeholder="Bạn đang nghĩ gì?" multiline placeholderTextColor={'#696969'}/>
              </View>
              <View style={{marginVertical: 10, marginHorizontal: 10}}>
                <Image source={{uri: image}} height={100} width={100} />
                <TouchableOpacity
                  onPress={chooseImage}
                  style={{flexDirection: 'row', marginVertical: 10}}>
                  <Icon2 name="images-outline" size={24} color={'#696969'}/>
                  <Text style={{fontSize: 18, marginHorizontal: 10, color: '#696969'}}>
                    Thêm ảnh
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', marginVertical: 10}}>
                  <Icon3 name="video" size={24} color={'#696969'}/>
                  <Text style={{fontSize: 18, marginHorizontal: 10, color: '#696969'}}>
                    Thêm video
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', marginVertical: 10}}>
                  <Icon2 name="location-outline" size={24} color={'#696969'}/>
                  <Text style={{fontSize: 18, marginHorizontal: 10, color: '#696969'}}>
                    Thêm vị trí
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    backgroundColor: '#54f',
                    color: '#fff',
                    height: 30,
                    marginHorizontal: 10,
                    borderRadius: 8,
                    marginVertical: 10,
                  }}>
                  Cập nhật
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
              <Text style={{color: '#696969'}}>12h ago</Text>
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
            <Text style={{fontSize: 16, color: '#696969'}}>Hello</Text>
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
            <TouchableOpacity style={{width: '25%', flex: 1}}>
              <View
                style={{
                  backgroundColor: '#ddd',
                  marginHorizontal: 10,
                  marginVertical: 10,
                  flexDirection: 'row',
                  // borderWidth: 0.3,
                  borderRadius: 25,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="hearto" size={18} color={'#696969'}/>

                <Text style={{fontSize: 16, marginLeft: 10,color: '#696969'}}>10k </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '25%', flex: 1}}>
              <View
                style={{
                  backgroundColor: '#ddd',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginVertical: 10,
                  // borderWidth: 0.3,
                  borderRadius: 25,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // borderLeftWidth: 0.5,
                }}>
                <Icon1 name="comment-alt" size={18} color={'#696969'}/>

                <Text style={{fontSize: 16, marginLeft: 10, color: '#696969'}}>1.5k </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '25%', flex: 1}}>
              <View
                style={{
                  backgroundColor: '#ddd',
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginVertical: 10,
                  // borderWidth: 0.3,
                  borderRadius: 25,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // borderLeftWidth: 0.5,
                }}>
                <Icon2 name="arrow-redo-sharp" size={24} color={'#696969'}/>

                <Text style={{fontSize: 16, marginLeft: 10, color: '#696969'}}>12k </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CommunityScreen;
