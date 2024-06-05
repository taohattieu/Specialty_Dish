import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Specialty {
  specialty_id: string;
  name: string;
  image: string;
  province_id: string;
}

type RouteParams = {provinceName: string; province_id: string};

const Specialty: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<{params: RouteParams}, 'params'>>();
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  useEffect(() => {
    const provinceName = route.params?.provinceName ?? '';
    setSelectedProvince(provinceName);

    const fetchSpecialties = async () => {
      try {
        const response = await axios.get(
          'https://zgnj25mm-8080.asse.devtunnels.ms/specialty',
        );
        const filteredSpecialties = response.data.filter(
          (specialty: Specialty) =>
            specialty.province_id === route.params.province_id,
        );
        setSpecialties(filteredSpecialties);

        const savedFavoritesString = await AsyncStorage.getItem(
          'favoriteSpecialties',
        );
        const savedFavorites = savedFavoritesString
          ? JSON.parse(savedFavoritesString)
          : [];
        setSelectedSpecialties(savedFavorites);
      } catch (error) {
        console.error('Lỗi khi tải các đặc sản:', error);
      }
    };

    fetchSpecialties();
  }, [route.params]);

  const toggleSpecialtySelection = async (specialty_id: string) => {
    setSelectedSpecialties(prevState => {
      const newFavorites = prevState.includes(specialty_id)
        ? prevState.filter(id => id !== specialty_id)
        : [...prevState, specialty_id];
      const selectedSpecialty = specialties.find(
        specialty => specialty.specialty_id === specialty_id,
      );
      AsyncStorage.setItem('favoriteSpecialties', JSON.stringify(newFavorites));
  
      if (newFavorites.includes(specialty_id) && selectedSpecialty) { // Thêm điều kiện selectedSpecialty
        Alert.alert(
          'Thành công',
          `Bạn đã thêm đặc sản ${selectedSpecialty.name} vào danh sách yêu thích thành công!`,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
  
      return newFavorites;
    });
  };
  

  const isSpecialtySelected = (specialty_id: string) => {
    return selectedSpecialties.includes(specialty_id);
  };

  const renderSpecialtyItem = ({item}: {item: Specialty}) => (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 5,
        marginVertical: 8,
      }}>
      <Image
        source={{uri: item.image}}
        style={{
          width: '30%',
          height: 100,
          marginHorizontal: 8,
          marginVertical: 8,
          borderRadius: 8,
        }}
      />
      <View
        style={{justifyContent: 'space-evenly', marginLeft: 16, width: '50%'}}>
        <Text style={{color: '#000000'}}>{item.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailsSpecialty', {
                specialty: item,
                specialtyName: item.name,
              })
            }>
            <Text style={{fontStyle: 'italic', color: 'blue'}}>Chi tiết</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleSpecialtySelection(item.specialty_id)}>
            {isSpecialtySelected(item.specialty_id) ? (
              <Icon name="heart" size={20} color="red" />
            ) : (
              <Icon1 name="heart" size={20} color="gray" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          height: 70,
          justifyContent: 'center',
          borderBottomWidth: 0.3,
        }}>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#f00'}}>
          {selectedProvince}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            position: 'absolute',
          }}>
          <Icon name="left" size={26} style={{color: '#f00'}} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={specialties}
          renderItem={renderSpecialtyItem}
          keyExtractor={item => item.specialty_id.toString()}
          contentContainerStyle={{marginHorizontal: 25, marginVertical: 10}}
        />
      </View>
    </>
  );
};

export default Specialty;
