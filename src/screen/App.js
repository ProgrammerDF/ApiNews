import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import splashScreen from './splashScreen/SplashScreen';
import News from './news/News';
import SplashScreen from './splashScreen/SplashScreen';
import {StatusBar} from 'react-native';
import DetailNews from './detailNews/DetailNews';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="DetailNews" component={DetailNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
