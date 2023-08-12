import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';
import Contadores from './src/components/Contadores';
import ButtonVisibleOcult from './src/components/ButtonVisibleOcult';
import Card from './src/components/CardFoto';
import CatFacts from './src/screens/CatFacts';
import CardCat from './src/screens/CardCat';
import University from './src/components/University';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <ButtonVisibleOcult />
    //   <Contadores />
    //   <CardFoto
    //     title="Título do Card"
    //     content="Este é o conteúdo do Card"
        
    //   />
    // </View>
    // <CatFacts />
    // <CardCat />
    <University />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1abc3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ad3280'
  }
});
