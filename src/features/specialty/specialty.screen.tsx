import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import DetailsSpecialty from './details-specialty.screen';
import axios from 'axios';
import {Image} from 'react-native';

const Specialty = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const [specialties, setSpecialties] = useState();
  const [provinces, setProvinces] = useState<any>();
  const [selectedProvince, setSelectedProvince] = useState('');

  interface routeParams {
    provinceName?: string;
  }

  useEffect(() => {
    const params = route.params as routeParams;
    const provinceName = params?.provinceName ?? '';
    setSelectedProvince(provinceName);
    const fetchSpecialties = async () => {
      try {
        const specialtiesResponse = await axios.get(
          'https://zgnj25mm-8080.asse.devtunnels.ms/specialty',
        );
        setSpecialties(specialtiesResponse.data);
      } catch (error) {
        console.error('Error fetching specialties:', error);
      }
    };
    fetchSpecialties();
    // const fetchProvinces = async () => {
    //   try {
    //     const provincesResponse = await axios.get(
    //       'http://172.22.160.1:3000/provinces',
    //     );
    //     setProvinces(provincesResponse.data);
    //   } catch (error) {
    //     console.error('Error fetching provinces: ', error);
    //   }
    // };
    // fetchProvinces();
  }, [navigation]);

  const renderSpecialtyItem = ({item}: any) => (
    <TouchableOpacity
      style={{marginVertical: 8}}
      onPress={() => navigation.navigate('DetailsSpecialty')}>
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          // borderWidth: 0.3,
          borderRadius: 5,
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
          style={{
            justifyContent: 'space-evenly',
            marginLeft: 16,
          }}>
          <Text style={{color: '#696969'}}>Name: {item.name}</Text>
          <Text style={{color: '#696969'}}>Origin: {item.origin}</Text>
          <Text style={{color: '#696969'}}>Description: {item.description}</Text>
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
          borderBottomWidth: 0.3
        }}>
          <Text
          style={{
            fontSize: 24,
            textAlign: 'center',
            color: '#f00',
            // backgroundColor: '#ff0'
            // fontVariant: ['small-caps'],
            // fontWeight: 'bold',
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
            // backgroundColor: '#065'
          }}>
          <Icon name="left" size={26} style={{color: '#f00'}} />
        </TouchableOpacity>
        
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={specialties}
          renderItem={renderSpecialtyItem}
          contentContainerStyle={{marginHorizontal: 25, marginVertical: 10}}
        />
      </View>
    </>
  );
};
export default Specialty;
