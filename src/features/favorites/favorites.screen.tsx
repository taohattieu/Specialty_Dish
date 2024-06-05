import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Specialty {
  specialty_id: string;
  name: string;
  image: string;
  province_id: string;
}

// Thêm prop specialties vào FavoritesScreen
const FavoritesScreen = ({ specialties }: { specialties: Specialty[] }) => {
  const [favoriteSpecialties, setFavoriteSpecialties] = useState<Specialty[]>([]);

  useEffect(() => {
    const fetchFavoriteSpecialties = async () => {
      try {
        const savedFavoritesString = await AsyncStorage.getItem('favoriteSpecialties');
        if (savedFavoritesString) {
          const savedFavorites: Specialty[] = JSON.parse(savedFavoritesString);
          console.log('Saved favorites:', savedFavorites);
          setFavoriteSpecialties(savedFavorites);
        }
      } catch (error) {
        console.error('Lỗi khi tải đặc sản yêu thích:', error);
      }
    };

    fetchFavoriteSpecialties();
  }, []);

  return (
    <View>
      <Text>Danh sách đặc sản yêu thích:</Text>
      {favoriteSpecialties.length === 0 ? (
        <Text>No favorites yet</Text>
      ) : (
        <FlatList
          data={favoriteSpecialties}
          renderItem={({ item }) => {
            // Kiểm tra xem specialties có dữ liệu không
            console.log('id', item.specialty_id)
            if (!specialties || specialties.length === 0) return null;

            // Lấy đối tượng đặc sản từ danh sách specialties dựa trên specialty_id
            const specialty = specialties.find(s => s.specialty_id === item.specialty_id);
            console.log('specialty', specialty)
            if (!specialty) return null; // Bỏ qua nếu không tìm thấy đặc sản

            return (
              <View>
                <Image source={{ uri: specialty.image }} style={{ width: 100, height: 100 }} />
                <Text>{specialty.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
