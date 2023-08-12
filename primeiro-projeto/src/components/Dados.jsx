import React, { useEffect, useState } from 'react'
import User from './UserDados'
import axios from 'axios'
import { View } from 'react-native'
import MyButton from './MyButton'

const Dados = () => {
  const [user, setUser] = useState(null) 
  
  const dadosUser = async () => {
    try {
        const {data} = await axios.get("https://randomuser.me/api/")
        setUser(...data.results)
        console.log(data.results)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    dadosUser
  },[])
  return (
    <View>
        <MyButton title="Buscar" onPressFacts={dadosUser} color="red" />
        {user && <User user={user} />}
    </View>
  )
}

export default Dados
