import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyButton = ({title, onPressButton}) => {
    
    const style = StyleSheet.create({
        button: {
            margin: 10,
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 30,
            borderWidth: 1,
            backgroundColor: '#f2f',
        },
        textButton: {
            color: 'white',
            fontSize: 18
        }
    })

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPressButton}>
        <View style={style.button}>
            <Text style={style.textButton}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
}

export default MyButton;