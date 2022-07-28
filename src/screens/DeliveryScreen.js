import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectdResturant } from '../../redux/features/resturantSlice'
import { TouchableOpacity } from 'react-native-web'
import { XIcon } from 'react-native-heroicons/outline'
import * as Progress from "react-native-progress"
const DeliveryScreen = () => {
    const navigation=useNavigation()
    const restaurant = useSelector(selectdResturant)
  return (
      
      <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50">
      <View className="flex-row justify-between items-center p-5">
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <XIcon color="white" size={30}/>
        </TouchableOpacity>
        <Text className="font-light text-white text-lg">Order Help</Text>
      </View>
      <View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-2xl font-bold">45-55 minutes</Text>
            </View>
            <Image
            source={{uri:"https://links.papareact.com/fls"}} 
            className="h-20 w-20"
            />
          </View>
          <Progress.Bar  size={30} indeterminate={true} color="#00CCBB"/>
        </View>
      </View>
    </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen