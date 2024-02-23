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
import {useNavigation} from '@react-navigation/native';
import DetailsSpecialty from './details-specialty.screen';
import axios from 'axios';
import {Image} from 'react-native';

const Specialty = () => {
  const navigation = useNavigation<any>();
  const [specialties, setSpecialties] = useState();
  const [provinces, setProvinces] = useState<any>();

  useEffect(() => {
    const fetchSpecialty = async () => {
      try {
        const response = await axios.get('http://172.23.64.1:3000/specialties');
        setSpecialties(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching specialty:', error);
      }
    };
    fetchSpecialty();
    const fetchProvinces = async () => {
      try {
        const response = await axios.get('http://172.23.64.1:3000/provinces');
        const data = response.data;
        // console.log(data);
        setProvinces(data.map((province: any) => province.name));
        console.log(data.map(p => p.name));
      } catch (error) {
        console.error('Error fetching provinces: ', error);
      }
    };
    fetchProvinces();
  }, []);

  const renderSpecialtyItem = ({item}) => (
    <TouchableOpacity
      style={{marginVertical: 8}}
      onPress={() => navigation.navigate('DetailsSpecialty')}>
      <View
        style={{
          backgroundColor: '#ddd',
          flexDirection: 'row',
          borderWidth: 0.3,
          borderRadius: 5,
        }}>
        <Image
          source={{uri: 'https://imgur.com/uxRg0TB.png'}}
          style={{
            width: '30%',
            height: 100,
            marginHorizontal: 8,
            marginVertical: 8,
            borderRadius: 8,
          }}
        />
        <View style={{justifyContent: 'space-evenly', marginHorizontal: 16}}>
          <Text>Name: {item.name}</Text>
          <Text>Origin: {item.origin}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <View style={{backgroundColor: '#fda', height: 50}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            position: 'absolute',
          }}>
          <Icon name="left" size={26} style={{color: '#f00'}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            marginVertical: 5,
            textAlign: 'center',
            marginLeft: 40,
            marginRight: 20,
          }}>
          Name
          {/* {provinces.name} */}
        </Text>
      </View>
      <View style={{backgroundColor: '#fff', flex: 1}}>
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
