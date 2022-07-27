import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectdResturant } from "../../redux/features/resturantSlice";
import {
    removeFromBasket,
    selectBasketItems,
    selectBasketTotal,
} from "../../redux/features/basketSlice";
import { useSelector, useDispatch } from "react-redux";
// import { useMemo } from "react";

import { XCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
    const navigation = useNavigation();
    const resturant = useSelector(selectdResturant);
    const items = useSelector(selectBasketItems);
    const basketTotal= useSelector(selectBasketTotal)
    const [groupedItemsInBasket, setGroupItemsInBasket] = useState([]);
    const dispatch = useDispatch();
    if (items.length === 0) return null;
    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupItemsInBasket(groupedItems);
    }, [items]);
    console.log(groupedItemsInBasket);

    // here useEffect and useMemo both we can use
    // useMemo(() => {
    //     const groupdItems = Items.reduce((results, item) => {
    //         (results[item.id] = results[item.id] || []).push(item);
    //         return results;
    //     }, {});
    //     setGroupItemsInBasket(groupdItems);
    // }, [Items]);
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="pt-10 rounded-b-3xl border-b border-[#00CCBB] bg-white shadow-sm">
                    <View className="p-5  relative ">
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
                <View className="flex-row items-center space-x-4 bg-white px-4 py-3 my-5">
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        className="w-7 h-7 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00ccbb]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(
                        ([key, items]) => (
                            <View
                                key={key}
                                className="flex-row items-center space-x-3 bg-white py-2 px-4"
                            >
                                <Text>{items.length}X</Text>
                                <Image
                                    source={{
                                        uri: urlFor(items[0]?.image).url(),
                                    }}
                                    className="w-12 h-12 rounded-full"
                                />
                                <Text className="flex-1">{items[0]?.name}</Text>
                                <Text className="text-gray-600">
                                    <Currency
                                        quantity={items[0]?.price}
                                        currency="BDT"
                                    />
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        dispatch(removeFromBasket({ id: key }));
                                    }}
                                >
                                    <Text className="text-[#00CCBB]" text-xs>
                                        Remove
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    )}
                </ScrollView>
                <View className="p-5 mt-5 space-y-4 bg-white">
                 <View className="flex-row justify-between">
                 <Text className="text-gray-400">SubTotal</Text>
                                <Text className="text-gray-400">
                                    <Currency
                                        quantity={basketTotal}
                                        currency="BDT"
                                    />
                                </Text>
                    </View> 
                    <View className="flex-row justify-between">
                 <Text className="text-gray-400">Delivery Fee</Text>
                                <Text className="text-gray-400">
                                    <Currency
                                        quantity={50}
                                        currency="BDT"
                                    />
                                </Text>
                    </View>   
                    <View className="flex-row justify-between">
                 <Text>Order Total</Text>
                                <Text className="font-extrabold">
                                    <Currency
                                        quantity={basketTotal+50}
                                        currency="BDT"
                                    />
                                </Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("PreparingOrderScreen")} className="rounded-lg bg-[#00CCBB] p-4"> 
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                        </TouchableOpacity> 
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;
