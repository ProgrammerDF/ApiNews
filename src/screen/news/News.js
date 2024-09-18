import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

const News = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const handlerDetail = item => {
    navigation.navigate('DetailNews', {item: item});
  };
  const getNews = async () => {
    try {
      const response = await fetch(
        'https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Fwww.antaranews.com%2Frss%2Fterkini.xml',
      );
      const json = await response.json();
      // console.log(json.items);
      setData(json.items);
      //   return json.movies;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  const renderItem = ({item}) => {
    // console.log('item : ', item);
    return (
      <TouchableOpacity
        style={{padding: 5, margin: 8, borderWidth: 1, elevation: 1}}
        onPress={() => handlerDetail(item)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(index, item) => index.toString()}
      />
    </View>
  );
};

export default News;
