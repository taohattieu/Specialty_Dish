import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import DetailsSpecialty from './details-specialty.screen';
import axios from 'axios';
import {Image} from 'react-native';

const Specialty = () => {
  const navigation = useNavigation<any>();
  const [specialties, setSpecialties] = useState();

  useEffect(() => {
    const fetchSpecialty = async () => {
      try {
        const response = await axios.get('http://172.18.0.1:3000/specialties');
        setSpecialties(response.data);
      } catch (error) {
        console.error('Error fetching specialty:', error);
      }
    };
    fetchSpecialty();
  }, []);
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
          akassjad
        </Text>
      </View>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView>
          <TouchableOpacity
            style={{marginVertical: 16, marginHorizontal: 16}}
            onPress={() => navigation.navigate('DetailsSpecialty')}>
            <View
              style={{
                backgroundColor: '#ddd',
                flexDirection: 'row',
                borderWidth: 0.5,
                borderRadius: 5,
              }}>
              <Image
                source={require('../../img/provinces/hue.jpg')}
                style={{
                  width: '30%',
                  height: 100,
                  marginHorizontal: 8,
                  marginVertical: 8,
                  borderRadius: 8,
                }}
              />
              <View
                style={{justifyContent: 'space-evenly', marginHorizontal: 20}}>
                <Text>Id</Text>
                <Text>Name</Text>
                <Text>Origin</Text>
              </View>
            </View>
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    </>
  );
};
export default Specialty;
