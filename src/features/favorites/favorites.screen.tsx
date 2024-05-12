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
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = () => {
  const navigation = useNavigation<any>();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

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

  const removeFromFavorites = async (item: any) => {
    try {
      const updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  const renderFavoriteItem = ({ item }) => (
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
          alignItems: 'center',
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
        <View style={{ justifyContent: 'space-evenly', marginLeft: 16, flex: 1 }}>
          <Text style={{ color: '#696969' }}>Name: {item.name}</Text>
          <Text style={{ color: '#696969' }}>Origin: {item.origin}</Text>
          <Text style={{ color: '#696969' }}>
            Description: {item.description}
          </Text>
          <TouchableOpacity onPress={() => removeFromFavorites(item)}>
            <Icon name="close" size={24} color="#696969" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
        <Text
          style={{
            fontSize: 24,
            textAlign: 'center',
            color: '#f00',
          }}>
          Favorites
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            renderItem={renderFavoriteItem}
            contentContainerStyle={{ marginHorizontal: 25, marginVertical: 10 }}
          />
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>No favorites yet</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default FavoritesScreen;
