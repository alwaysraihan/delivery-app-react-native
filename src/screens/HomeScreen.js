import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";
const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header  */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    className="h-7 w-7 bg-gray-300 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className=" font-bold text-xl flex items-center ">
                        Current Location
                        <ChevronDownIcon size={20} color="#00ccbb" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00ccbb" />
            </View>

            {/* Search  */}
            <View className="flex-row space-x-2 items-center pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsIcon size={20} color="#00ccbb" />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
