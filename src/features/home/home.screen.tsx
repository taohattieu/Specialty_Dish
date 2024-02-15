import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import App from './../../../App';
import Icon from 'react-native-vector-icons/EvilIcons';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#eda'}}>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            // fontFamily: 'opensans_bold',
            // fontStyle: 'italic',
          }}>
          Specialty Dishes in Viet Nam
        </Text>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Search or Select in provice
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
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../img/hanoi.png')}
            style={{width: 100, height: 100}}
          />
          <Text style={{textAlign: 'center'}}>Hà Nội</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../img/hanoi.png')}
            style={{width: 100, height: 100}}
          />
          <Text style={{textAlign: 'center'}}>Hà Nội</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../img/hanoi.png')}
            style={{width: 100, height: 100}}
          />
          <Text style={{textAlign: 'center'}}>Hà Nội</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default HomeScreen;
