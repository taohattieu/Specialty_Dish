import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import axios from 'axios';

const HomeScreen = () => {
  const [provinces, setProvinces] = useState<Array<{id: number; name: string}>>(
    [],
  );
  const [searchProvinces, setSearchProvinces] = useState('');
  const [filteredProvinces, setFilteredProvinces] = useState<
    Array<{id: number; name: string}>
  >([]);
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get('http://localhost:3000/provinces');
        setProvinces(response.data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchProvinces();
  }, []);

  const calculateItemSize = () => {
    const columns = 2;
    const itemSize = (windowWidth - 100) / columns;
    return itemSize;
  };

  const handleSearch = (query: string) => {
    setSearchProvinces(query);
    const filtered = provinces.filter(province =>
      province.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredProvinces(filtered);
  };

  const renderProvinceItem = ({item}) => (
    <TouchableOpacity style={{marginBottom: 20}}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: 'red',
          marginLeft: 15,
        }}>
        <Image
          source={require('../../img/provinces/hanoi.png')}
          style={{
            width: calculateItemSize(),
            height: calculateItemSize(),
            borderRadius: 8,
          }}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 10,
          color: 'black',
          fontSize: 16,
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#eda'}}>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            color: '#090',
            fontStyle: 'italic',
            top: 10,
            fontVariant: ['small-caps'],
            fontWeight: 'bold',
          }}>
          Specialty Dishes in Viet Nam
        </Text>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Search or Select in province
        </Text>
      </View>
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          marginHorizontal: 10,
          marginVertical: 10,
          backgroundColor: '#fff',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="search"
            size={30}
            color="red"
            style={{marginLeft: 8, top: 10}}
          />
          <TextInput
            placeholder="Enter to Search"
            style={{
              height: 25,
              width: '80%',
              marginHorizontal: 10,
              marginVertical: 10,
              backgroundColor: '#fff',
            }}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <FlatList
        data={filteredProvinces.length > 0 ? filteredProvinces : provinces}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={renderProvinceItem}
        contentContainerStyle={{marginHorizontal: 25, marginVertical: 10}}
      />
    </View>
  );
};

export default HomeScreen;
