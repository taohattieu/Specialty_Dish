import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import axios from 'axios';

const HomeScreen = () => {
  const navigation: any = useNavigation();
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
        const response = await axios.get('https://zgnj25mm-8080.asse.devtunnels.ms/province');
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

  const renderProvinceItem = ({item}: any) => (
    <TouchableOpacity
      style={{marginBottom: 20}}
      onPress={() => {
        // navigation.navigate('Specialty');
        navigation.navigate('Specialty', {provinceName: item.name});
      }}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: 'red',
          marginLeft: 15,
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: calculateItemSize(),
            height: calculateItemSize(),
            borderRadius: 8,
          }}
        />
      </View>
      {/* <Text>{item.id}</Text> */}
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
    <View style={{flex: 1, backgroundColor: '##fce7a8'}}>
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
        <Text style={{textAlign: 'center', marginTop: 20, color: '#696969'}}>
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
        <View style={{flexDirection: 'row', height: 50}}>
          <Icon
            name="search"
            size={30}
            color="red"
            style={{marginLeft: 8, top: 10}}
          />
          <TextInput
            placeholder="Enter to Search"
            placeholderTextColor={'#696969'}
            style={{
              height: 40,
              width: '80%',
              marginHorizontal: 10,
              marginVertical: 8,
              backgroundColor: '#fff',
              color: '#f00',
              fontSize: 18,
            }}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <FlatList
        data={filteredProvinces.length > 0 ? filteredProvinces : provinces}
        // keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={renderProvinceItem}
        contentContainerStyle={{marginHorizontal: 25, marginVertical: 10}}
      />
    </View>
  );
};

export default HomeScreen;
