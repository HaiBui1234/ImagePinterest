import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { BackHandler, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './Detail';
import Dating from './Dating';
import About from './About';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
       <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Dating" component={Dating} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'black'
    ,  alignItems: 'center',  justifyContent: 'center'
  },
});
