import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

interface SpecialtyDetails {
  image: string;
  name: string;
  ingredient: string;
  origin: string;
  description: string;
}

const DetailsSpecialty = ({route}: {route: any}) => {
  const {specialty} = route.params;
  const navigation = useNavigation();

  const [specialtyDetails, setSpecialtyDetails] =
    useState<SpecialtyDetails | null>(null);

  useEffect(() => {
    const fetchSpecialtyDetails = async () => {
      try {
        const response = await axios.get(
          `https://zgnj25mm-8080.asse.devtunnels.ms/specialty-details`,
        );
        const selectedSpecialty = response.data.find(
          (item: SpecialtyDetails) => item.name === specialty.name,
        );
        setSpecialtyDetails(selectedSpecialty);
      } catch (error) {
        console.error('Error fetching specialty details:', error);
      }
    };

    fetchSpecialtyDetails();
  }, [specialty]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{height: 70, justifyContent: 'center', borderBottomWidth: 0.3}}>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#f00'}}>
          {specialty.name}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <Icon name="left" size={26} style={{color: '#f00'}} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: 20,
          backgroundColor: '#fce7a8',
          flexGrow: 1,
        }}>
        {specialtyDetails && (
          <>
            <Image
              source={{uri: specialtyDetails.image}}
              style={{
                width: '90%',
                height: 200,
                borderRadius: 10,
                marginBottom: 10,
                borderWidth: 2,
                borderColor: 'red',
              }}
            />
            <View style={{width: '90%', marginBottom: 10}}>
              <Text
                style={{
                  fontSize: 14,
                  fontStyle: 'italic',
                  marginBottom: 5,
                  color: '#333333',
                  textAlign: 'center',
                }}>
                {specialtyDetails.name} - Đặc sản tỉnh {specialtyDetails.origin}
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                backgroundColor: '#ffffff',
                marginVertical: 20,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                  marginVertical: 10,
                  color: '#333',
                }}>
                Cách chế biến:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  color: 'red',
                }}>
                {specialtyDetails.ingredient}
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                  marginVertical: 10,
                  color: '#333',
                }}>
                Mô tả:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 10,
                  color: 'red',
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}>
                {specialtyDetails.description}
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default DetailsSpecialty;
