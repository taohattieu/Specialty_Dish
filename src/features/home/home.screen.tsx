import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, { useState } from 'react';
import {TextInput} from 'react-native-paper';
import App from './../../../App';
import Icon from 'react-native-vector-icons/EvilIcons';
import axios from  "axios";

const HomeScreen =  () => {
  // const reponse = await axios.get("http://localhost:3000/provinces")
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
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 25,
            marginVertical: 10,
          }}>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: 'red',
                // marginRight: 20,
              }}>
              <Image
                source={require('../../img/provinces/hanoi.png')}
                style={{width: 100, height: 100, borderRadius: 8}}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 10,
                color: 'black',
                fontSize: 16,
                // fontWeight: 'bold'
              }}>
              Hà Nội
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: 'red',
                // marginRight: 20,
              }}>
              <Image
                source={require('../../img/provinces/hanoi.png')}
                style={{width: 100, height: 100, borderRadius: 8}}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 10,
                color: 'black',
                fontSize: 16,
                // fontWeight: 'bold'
              }}>
              Hà Nội
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: 'red',
                // marginRight: 20,
              }}>
              <Image
                source={require('../../img/provinces/hanoi.png')}
                style={{width: 100, height: 100, borderRadius: 8}}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 10,
                color: 'black',
                fontSize: 16,
                // fontWeight: 'bold'
              }}>
              Hà Nội
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
