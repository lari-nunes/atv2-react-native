import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Contadores = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d1abc3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#ad3280'
    },
  });

  const [contador, setContador] = useState(0);

  const onPressButtonSum = () => {
    setContador(contador + 1);
  }

  const onPressButtonSub = () => {
    setContador(contador - 1);
  }

  const onPressButtonZer = () => {
    setContador(0);
  }

  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Button title='+ 1' onPress={onPressButtonSum}></Button>
      <Button title='- 1' onPress={onPressButtonSub}></Button>
      <Button title='Zerar' onPress={onPressButtonZer}></Button>
    </View>
  );
}

export default Contadores;
