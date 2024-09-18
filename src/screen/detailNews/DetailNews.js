import React from 'react';
// import { View , Text } from "react-native";
import WebView from 'react-native-webview';

const DetailNews = ({route}) => {
  const {item} = route?.params;
  //   console.log('item', item);
  return <WebView source={{uri: item.guid}} style={{flex: 1}} />;
};
export default DetailNews;
