import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import axios from 'axios';

type RouteParams = {
  provinceName: string;
  province_id: string;
};

const Specialty = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<{params: RouteParams}, 'params'>>();
  const [specialties, setSpecialties] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');

  useEffect(() => {
    const provinceName = route.params?.provinceName ?? '';
    setSelectedProvince(provinceName);

    const fetchSpecialties = async () => {
      try {
        const specialtiesResponse = await axios.get(
          'https://zgnj25mm-8080.asse.devtunnels.ms/specialty',
        );

        const filteredSpecialties = specialtiesResponse.data.filter(
          (specialty: any) =>
            specialty.province_id === route.params.province_id,
        );

        setSpecialties(filteredSpecialties);
      } catch (error) {
        console.error('Error fetching specialties:', error);
      }
    };

    fetchSpecialties();
  }, [route.params]);

  const renderSpecialtyItem = ({item}: {item: any}) => (
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

          <Text style={{}}>Nút yêu thích</Text>
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
          <Icon name="left" size={26} style={{color: '#f00'}} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={specialties}
          renderItem={renderSpecialtyItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{marginHorizontal: 25, marginVertical: 10}}
        />
      </View>
    </>
  );
};

export default Specialty;
