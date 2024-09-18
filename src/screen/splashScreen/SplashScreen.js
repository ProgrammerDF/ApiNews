import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';

const SeplaceScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1caa56',
      }}>
      <View
        style={{
          marginTop: -20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '400',
          }}>
          MamiKos.Com
        </Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.CZYIvKFjNtqA9oZFYN8_IAHaGy?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          }}
          style={{height: 100, width: 200}}
          resizeMode="contain"
        />
      </View>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default SeplaceScreen;
