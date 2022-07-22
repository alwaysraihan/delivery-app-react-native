import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectdResturant } from "../../redux/features/resturantSlice";
import { selectBasketItems } from "../../redux/features/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { useState } from "react";
import { XCircleIcon } from "react-native-heroicons/outline";
const BasketScreen = () => {
    const navigation = useNavigation();
    const resturant = useSelector(selectdResturant);
    const Items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupItemsInBasket] = useState([]);
    const dispatch = useDispatch();
    if (Items.length === 0) return null;
    useEffect(() => {
        const groupdItems = Items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupItemsInBasket(groupdItems);
    }, [Items]);

    // here useEffect and useMemo both we can use
    // useMemo(() => {
    //     const groupdItems = Items.reduce((results, item) => {
    //         (results[item.id] = results[item.id] || []).push(item);
    //         return results;
    //     }, {});
    //     setGroupItemsInBasket(groupdItems);
    // }, [Items]);
    return (
        <SafeAreaView>
            <View>
                <View>
                    <View>
                        <Text className="text-lg font-bold text-center">
                            Basket
                        </Text>
                        <Text className="text-center text-gray-400">
                            {resturant.title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-5"
                    >
                        <XCircleIcon color="#00CCBB" size={50} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;
