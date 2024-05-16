import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

type Region = {
  regions_id: string;
  name: string;
};

type Province = {
  province_id: string;
  name: string;
  regions_id: string;
  image: string;
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [regionsData, setRegionsData] = useState<Region[]>([]);
  const [provincesData, setProvincesData] = useState<Province[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'mienBac', title: 'Miền Bắc'},
    {key: 'mienTrung', title: 'Miền Trung'},
    {key: 'mienNam', title: 'Miền Nam'},
  ]);

  useEffect(() => {
    const fetchRegionsAndProvinces = async () => {
      try {
        const regionsResponse = await axios.get(
          'https://zgnj25mm-8080.asse.devtunnels.ms/regions',
        );
        setRegionsData(regionsResponse.data);

        const provincesResponse = await axios.get(
          'https://zgnj25mm-8080.asse.devtunnels.ms/province',
        );
        setProvincesData(provincesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegionsAndProvinces();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderProvinceList = (regionId: string) => {
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 2 - 35;

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fce7a8'}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {provincesData
            .filter(province => province.regions_id === regionId)
            .map(province => (
              <View
                key={province.province_id}
                style={{width: itemWidth, alignItems: 'center', marginTop: 20}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Specialty', {
                      provinceName: province.name,
                      province_id: province.province_id,
                    })
                  }>
                  <Image
                    source={{uri: province.image}}
                    style={{
                      width: itemWidth,
                      height: itemWidth,
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: 'red',
                    }}
                  />
                  <Text
                    style={{
                      marginVertical: 10,
                      fontSize: 16,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    {province.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    );
  };

  const renderScene = SceneMap({
    mienBac: () => renderProvinceList('19d96eb7-0c99-4395-b4bb-23091412e00d'),
    mienTrung: () => renderProvinceList('cbe91f2c-c4e3-4c66-be83-b2bf20ec6779'),
    mienNam: () => renderProvinceList('d3ce4c07-84a0-4a60-b347-7821f08d219b'),
  });

  return (
    <View style={{flex: 1}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: 'red'}}
            style={{backgroundColor: 'white'}}
            labelStyle={{color: 'black', fontWeight: 'bold'}}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
