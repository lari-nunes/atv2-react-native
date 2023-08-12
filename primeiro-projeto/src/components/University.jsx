import axios from 'axios';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MyButton from './MyButton';

const University = () => {
  const [uni, setUni] = useState([])
  const universidade = async () => {
    try {
        const { data } = await axios.get("http://universities.hipolabs.com/search?country=Brazil")
        setUni(...data)
        console.log(uni)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <View>
        <MyButton color={"red"} onPressFacts={universidade} title={"Clique"}/> 
        {uni && 
            <>
                <Text>{uni.name}</Text>
                <Text>{uni.domains}</Text>
            </>}
    </View>
  )
}

export default University;