import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Specialty {
  specialty_id: string;
  name: string;
  image: string;
  province_id: string;
}

const FavoritesScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [favoriteSpecialties, setFavoriteSpecialties] = useState<string[]>([]);

  const fetchSpecialties = async () => {
    try {
      const savedFavoritesString = await AsyncStorage.getItem(
        'favoriteSpecialties',
      );
      if (savedFavoritesString) {
        const savedFavorites: string[] = JSON.parse(savedFavoritesString);
        // console.log('Saved favorites:', savedFavorites);
        setFavoriteSpecialties(savedFavorites);
      }

      const specialtiesString = await AsyncStorage.getItem('specialties');
      if (specialtiesString) {
        const specialtiesData: Specialty[] = JSON.parse(specialtiesString);
        setSpecialties(specialtiesData);
      }
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchSpecialties();
    }, []),
  );

  const removeFromFavorites = async (specialtyId: string) => {
    try {
      // Lấy danh sách đặc sản yêu thích từ AsyncStorage
      const savedFavoritesString = await AsyncStorage.getItem(
        'favoriteSpecialties',
      );
      if (savedFavoritesString) {
        // Chuyển danh sách đặc sản yêu thích thành mảng
        let savedFavorites: string[] = JSON.parse(savedFavoritesString);
        // Hiển thị cửa sổ cảnh báo khi nhấn vào nút xóa
        Alert.alert(
          'Xác nhận',
          'Bạn có chắc chắn muốn xóa đặc sản khỏi mục yêu thích?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: async () => {
                // Loại bỏ đặc sản có specialtyId khỏi danh sách
                savedFavorites = savedFavorites.filter(
                  id => id !== specialtyId,
                );
                // Cập nhật danh sách mới vào AsyncStorage
                await AsyncStorage.setItem(
                  'favoriteSpecialties',
                  JSON.stringify(savedFavorites),
                );
                // Cập nhật state favoriteSpecialties
                setFavoriteSpecialties(savedFavorites);
              },
            },
          ],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.error('Lỗi khi xóa đặc sản yêu thích:', error);
    }
  };

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#ffffff',
          height: 70,
          borderBottomWidth: 0.3,
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
          Yêu thích
        </Text>
      </View>
      {favoriteSpecialties.length === 0 ? (
        <View style={{justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center'}}>
            Không có đặc sản yêu thích nào!
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoriteSpecialties}
          renderItem={({item}) => {
            const specialty = specialties.find(s => s.specialty_id === item);
            if (!specialty) return null;
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  marginVertical: 10,
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                }}>
                <Image
                  source={{uri: specialty.image}}
                  style={{
                    width: 100,
                    height: 100,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderRadius: 8,
                  }}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 0, right: 0, padding: 14}}
                  onPress={() => removeFromFavorites(specialty.specialty_id)}>
                  <Icon name="remove" size={24} style={{}} />
                </TouchableOpacity>

                <View style={{justifyContent: 'center'}}>
                  <Text style={{color: '#000000'}}>{specialty.name}</Text>
                </View>

                {/* <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    bottom: 0,
                    right: 0,
                    padding: 14,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DetailsSpecialty', {
                        specialty: specialty.specialty_id,
                      })
                    }>
                    <Text style={{fontStyle: 'italic', color: 'blue'}}>
                      Xem thêm
                    </Text>
                  </TouchableOpacity>
                </View> */}
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
