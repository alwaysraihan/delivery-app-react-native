import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Currency from "react-currency-formatter";

import {
    selectBasketItems,
    selectBasketTotal,
} from "../../redux/features/basketSlice";
import { useNavigation } from "@react-navigation/native";
const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);
    return (
        <View className="absolute bottom-10 z-50 w-full">
            <TouchableOpacity
                onPress={() => navigation.navigate("Basket")}
                className=" mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1"
            >
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
                    {items.length}
                </Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">
                    View Basket
                </Text>
                <Text className=" text-lg text-white font-extrabold">
                    <Currency quantity={basketTotal} currency="BDT" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default BasketIcon;
