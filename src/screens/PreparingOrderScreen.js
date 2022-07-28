import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
const PreparingOrderScreen = () => {
  const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 4000);
  },[])
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
      source={require("../../assets/order.gif")}
      animation="slideInUp"
      iterationCount={1}
      className=" h-72 w-72"
      />
      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-lg text-white my-10 font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle  size={60} indeterminate={true} color="white"/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen