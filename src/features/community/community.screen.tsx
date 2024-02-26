import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';

const CommunityScreen = () => {
  return (
    <>
      <View style={{height: 70, justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center', fontSize: 24}}>Community</Text>
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
                  width: 50,
                  height: 50,
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
