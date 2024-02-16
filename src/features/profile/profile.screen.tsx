import {View, Text, Image} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.4}}>
        <Image
          source={require('../../img/tphcm.png')}
          style={{width: '100%', height: '100%', opacity: 0.7}}
        />
        <Image
          source={require('../../img/hanoi.png')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: 'flex-end',
            marginVertical: 80,
            marginHorizontal: 50,
            position: 'absolute',
            right: 0
          }}
        />
      </View>
      <View style={{flex: 1, backgroundColor: '#fe0'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>hjh</Text>
      </View>
    </View>
  );
};

export default Profile;
