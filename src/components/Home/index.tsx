import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { getAlianca } from '../../services/cities';
import Loader from '../Loader/loader';
import Recife from '../municipios/Recife';

export default function Home() {
  const [alianca, setAlianca] = useState<any[]>([]);
  const [load, setLoad] = useState(true)

  const navigation = useNavigation();

  async function callAPI() {
    const response = await getAlianca(5);
    setAlianca(response.data)
    setLoad(false)
  }

  useEffect(() => {
    callAPI();
  }, []);


  return (
      <View style={styles.container}>
        <SafeAreaView>
          {load == true ?
            <Loader loading={load}/>
            :
            <View>
              <View style={{marginBottom: 16}}>
                <Text>Selecione qual munícipo você quer ver:</Text>
              </View>
              <Button
                onPress={() => navigation.navigate('Totais')}
                title='Casos Totais'
                color='green'
              />
              <View style={{marginBottom: 16}} />
              <Button
                onPress={() => navigation.navigate('Recife')}
                title='Recife'
                
              />
              <View style={{marginBottom: 16}} />
              <Button
                onPress={() => navigation.navigate('Olinda')}
                title='Olinda'
              />
              <View style={{marginBottom: 16}} />
              <Button
                onPress={() => navigation.navigate('Jaboatao')}
                title='Jaboatao'
              />
              <View style={{marginBottom: 16}} />
              <Button
                onPress={() => navigation.navigate('Alianca')}
                title='Aliança'
              />
              <View style={{marginBottom: 16}} />
              <Button
                onPress={() => navigation.navigate('AbreueLima')}
                title='Abreu e Lima'
              />
              <View style={{marginBottom: 16}} />
              <Button
                onPress={() => navigation.navigate('Cabo')}
                title='Cabo de Santo Agostinho'
              />
              <View style={{marginBottom: 16}} />
              <Button
                onPress={() => navigation.navigate('Camaragibe')}
                title='Camaragibe'
              />
              <View style={{marginBottom: 16}} />
              <Button
                onPress={() => navigation.navigate('SaoLourenco')}
                title='São Lourenço'
              />
            </View>
          }
        </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
