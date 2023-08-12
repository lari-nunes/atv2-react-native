import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    paragraph: {
      fontSize: 19,
      marginBottom: 20,
    },
  });

const ButtonVisibleOcult = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cabeçalho</Text>
      {isVisible && <Text style={styles.paragraph}>Texto visível</Text>}
      <Button title={isVisible ? "Ocultar" : "Mostrar"} onPress={toggleParagraph} />
    </View>
  );
};



export default ButtonVisibleOcult;
