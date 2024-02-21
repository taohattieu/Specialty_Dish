import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import DetailsSpecialty from './details-specialty.screen';

const Specialty = () => {
  const navigate = useNavigation<any>();
  return (
    <View style={{backgroundColor: '#fda', height: 50}}>
      <TouchableOpacity onPress={() => {navigate.goBack()}} style={{}}>
      <Icon name='left' size={26}/>
      </TouchableOpacity>
    </View>
  )
}
export default Specialty;
