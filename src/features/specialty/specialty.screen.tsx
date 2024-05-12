import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

const Specialty = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const [specialties, setSpecialties] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const params = route.params;
    const provinceName = params?.provinceName ?? '';
    setSelectedProvince(provinceName);
    const fetchSpecialties = async () => {
      try {
        const specialtiesResponse = await axios.get(
          'https://zgnj25mm-8080.asse.devtunnels.ms/specialty'
        );
        setSpecialties(specialtiesResponse.data);
      } catch (error) {
        console.error('Error fetching specialties:', error);
      }
    };
    fetchSpecialties();
    // Load favorites from storage
    loadFavorites();
  }, [navigation]);

  const loadFavorites = async () => {
    try {
      const favoritesString = await AsyncStorage.getItem('favorites');
      if (favoritesString !== null) {
        setFavorites(JSON.parse(favoritesString));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const saveFavorites = async () => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const toggleFavorite = (item: any) => {
    const index = favorites.findIndex((fav) => fav.id === item.id);
    if (index !== -1) {
      // If already favorited, remove it
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(index, 1);
      setFavorites(updatedFavorites);
    } else {
      // Otherwise, add it to favorites
      setFavorites([...favorites, item]);
    }
  };

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.id === item.id);
  };

  const renderSpecialtyItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginVertical: 8 }}
      onPress={() =>
        navigation.navigate('DetailsSpecialty', { specialty: item })
      }>
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          borderRadius: 5,
        }}>
        <Image
          source={{ uri: item.image }}
          style={{
            width: '30%',
            height: 100,
            marginHorizontal: 8,
            marginVertical: 8,
            borderRadius: 8,
          }}
        />
        <View style={{ justifyContent: 'space-evenly', marginLeft: 16 }}>
          <Text style={{ color: '#696969' }}>Name: {item.name}</Text>
          <Text style={{ color: '#696969' }}>Origin: {item.origin}</Text>
          <Text style={{ color: '#696969' }}>
            Description: {item.description}
          </Text>
          <TouchableOpacity onPress={() => toggleFavorite(item)}>
            <Icon
              name={isFavorite(item) ? 'heart' : 'hearto'}
              size={24}
              color={isFavorite(item) ? '#f00' : '#696969'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Call saveFavorites whenever favorites change
  useEffect(() => {
    saveFavorites();
  }, [favorites]);

  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          height: 70,
          justifyContent: 'center',
          borderBottomWidth: 0.3,
        }}>
        <Text
          style={{
            fontSize: 24,
            textAlign: 'center',
            color: '#f00',
          }}>
          {selectedProvince}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            position: 'absolute',
          }}>
          <Icon name="left" size={26} style={{ color: '#f00' }} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={specialties}
          renderItem={renderSpecialtyItem}
          contentContainerStyle={{ marginHorizontal: 25, marginVertical: 10 }}
        />
      </View>
    </>
  );
};

export default Specialty;
