import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Platform,Dimensions, Text,Image,Touchable,View,SafeAreaView } from 'react-native';
import {useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
     <WelcomeScreen/>
      
  );
}

