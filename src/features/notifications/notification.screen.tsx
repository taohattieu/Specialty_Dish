import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface Notification {
  type: string;
  message: string;
}

const NotificationScreen: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Lấy token xác thực từ AsyncStorage
        const token = await AsyncStorage.getItem('userToken');
        // Lấy thông tin về tài khoản đăng nhập
        const account_id = await AsyncStorage.getItem('account_id'); // Ví dụ: userId là ID của tài khoản hiện đang đăng nhập
        // Tạo các tham số truy vấn để gửi thông tin về tài khoản đến máy chủ
        const params = {
          account_id: account_id
        };
        // Thêm token và thông tin tài khoản vào header và tham số truy vấn của yêu cầu HTTP
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: params
        };
        // Gửi yêu cầu HTTP với token xác thực và thông tin tài khoản
        const response = await axios.get('https://zgnj25mm-8080.asse.devtunnels.ms/notifications', config);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchNotifications();
  }, []);

  const renderNotificationItem = ({ item }: { item: Notification }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
        marginVertical: 8,
        borderRadius: 10
      }}>
      <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 50, marginLeft: 10 }}>
        <Image
          source={require('../../img/image.jpg')}
          style={{ width: 70, height: 70, borderRadius: 50 }}
        />
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: 16,
          marginVertical: 16,
          width: '70%',
        }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.type}</Text>
        <Text style={{ fontSize: 14, marginVertical: 10, marginRight: 16 }}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#ffffff',
          height: 70,
          borderBottomWidth: 0.3,
          justifyContent: 'center',
          marginBottom: 10
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Thông báo</Text>
      </View>
      {/* Sử dụng FlatList để hiển thị danh sách thông báo */}
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default NotificationScreen;
