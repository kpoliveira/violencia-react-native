import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { getAlianca } from './src/services/cities';
import Loader from './src/components/Loader/loader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Recife from './src/components/municipios/Recife';
import Olinda from './src/components/municipios/Olinda';
import Jaboatao from './src/components/municipios/Jaboatao';
import Alianca from './src/components/municipios/Alianca';
import Totais from './src/components/municipios/Totais';
import AbreueLima from './src/components/municipios/AbreueLima';
import Cabo from './src/components/municipios/CabodeSantoAgostinho';
import Camaragibe from './src/components/municipios/Camaragibe';
import SaoLourenco from './src/components/municipios/SaoLourenco';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name="Totais" component={Totais} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Recife" component={Recife} />
        <Stack.Screen name="Olinda" component={Olinda} />
        <Stack.Screen name="Jaboatao" component={Jaboatao} />
        <Stack.Screen name="Alianca" component={Alianca} />
        <Stack.Screen name="AbreueLima" component={AbreueLima} />
        <Stack.Screen name="Cabo" component={Cabo} />
        <Stack.Screen name="Camaragibe" component={Camaragibe} />
        <Stack.Screen name="SaoLourenco" component={SaoLourenco} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}