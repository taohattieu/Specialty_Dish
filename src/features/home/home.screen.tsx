import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import App from './../../../App';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, }}>
      <View
        style={{flex: 0.1, backgroundColor: '#f9d', justifyContent: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontFamily: 'opensans_bold',
            fontStyle: 'italic',
          }}>
          Specialty Dishes in Viet Nam
        </Text>
        <Text>
          Search or Select in provice
        </Text>
      </View>
      <View style={{flex: 0.1, borderWidth: 1}}>
        <TextInput placeholder="Search province"></TextInput>
      </View>
    </View>
  );
};

export default HomeScreen;
