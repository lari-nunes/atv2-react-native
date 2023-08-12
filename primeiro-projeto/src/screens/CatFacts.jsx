// import React, { useState } from "react";
// import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
// import axios from "axios";
// import MyButton from '../components/MyButton';

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       padding: 20,
//     },
//     header: {
//       fontSize: 24,
//       fontWeight: "bold",
//       marginBottom: 20,
//     },
//     paragraph: {
//       fontSize: 19,
//       marginBottom: 20,
//     },
//   });

// const CatFacts = () => {

//     const [catFact, setCatFect] = useState();
//     const [catFact2, setCatFect2] = useState();

//     const fetchCatFact = async () => {
//         try{
//             const {data} = await axios.get("https://catfact.ninja/fact")
//             setCatFect(data.fact);
//             const {data: data2} = await axios.get("https://catfact.ninja/fact")
//             setCatFect(data2.fact);
//         }catch(error){
//             console.log(error)
//         }
//     }

//     return (
//         <SafeAreaView>
//             <View>
//                 <Text>Cats facts</Text>
//                 <MyButton title="Fato aleatório sobre gatos" onPressButton={fetchCatFact} />
//                 <Text>{catFact ? catFact : ""}</Text>
//                 <Text>{catFact2 ? catFact2 : ""}</Text>
//             </View>
//         </SafeAreaView>
//     );
// }

// export default CatFacts;