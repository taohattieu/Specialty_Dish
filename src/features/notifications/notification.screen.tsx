import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const NotificationScreen: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#ffffff',
          height: 70,
          borderBottomWidth: 0.3,
          justifyContent: 'center'
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>Thông báo</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          backgroundColor: '#ffffff',
          marginVertical: 16,
          borderRadius: 10
        }}>
        <TouchableOpacity style={{borderWidth: 0.5, borderRadius: 50, marginLeft: 10}}>
          <Image
            source={require('../../img/img.jpg')}
            style={{width: 70, height: 70, borderRadius: 50}}
          />
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 16,
            marginVertical: 16,
            width: '75%',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Tiêu đề thông báo
          </Text>
          <Text style={{fontSize: 14, marginVertical: 10, marginRight: 16}}>
            Nội dung thông báo sẽ được hiển thị ở đây.
            Nội dung thông báo sẽ được hiển thị ở đây.
            Nội dung thông báo sẽ được hiển thị ở đây.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
