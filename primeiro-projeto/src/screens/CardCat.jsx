import React, { useState } from 'react'
import axios from 'axios'
import { View, Text } from 'react-native'
import MyButton from '../components/MyButton'

const Facts = () => {
  const [catFact, setCatfact] = useState()
  const FactsLength = async () => {
    try {
        const {data} = await axios.get("https://catfact.ninja/fact")
        setCatfact(data)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <View>
        <MyButton onPressFacts={FactsLength} title="Clique" color="red" />
        <View>
            <Text>{catFact ? catFact.fact : ""}</Text>
            <Text>{catFact ? catFact.length : ""}</Text>
        </View>
    </View>
  )
}

export default Facts