import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import Shelves from './screens/Shelves';
import Stock from './screens/Stock';
import BookMark from './screens/BookMark';
import OnboardScreen1 from './screens/OnboardScreen1';
import OnboardScreen2 from './screens/OnboardScreen2';
import LoginScreen from './screens/LoginScreen';
import CurrentReading from './screens/books/Alone';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'#104547',
        tabBarInactiveTintColor:'#70A288'
      }}
    >
      <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name = 'home-assistant' color={color} size={size}/>
          ),
        }}
        />
      <Tab.Screen 
        name='Categories' 
        component={Shelves}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name = 'bookshelf' color={color} size={size}/>
          ),
        }} 
      />
      <Tab.Screen 
        name='Bookmark' 
        component={BookMark} 
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name = 'bookmark-box-multiple' color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnboardScreen1'>
        <Stack.Screen name='OnboardScreen1' component={OnboardScreen1} options={{ headerShown: false }} />
        <Stack.Screen name='OnboardScreen2' component={OnboardScreen2} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Alone" component={CurrentReading} />
        <Stack.Screen
         name='Home' 
         component={HomeTabs} 
         options={{ 
          title: 'Categories' ,
          headerShown:false,
        }} 
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
