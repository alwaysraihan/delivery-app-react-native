import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import {
    ArrowLeftIcon,
    LocationMarkerIcon,
    StarIcon,
} from "react-native-heroicons/outline";

const ResturantScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shor_description,
            dishes,
            long,
            lat,
        },
    } = useRoute();
    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{ uri: urlFor(imgUrl).url() }}
                    className="w-full h-64 bg-gray-300 p-4"
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="absolute top-14 left-5 bg-gray-100 rounded-full p-2"
                >
                    <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-2 my-2">
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text>{" "}
                                . {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-2 my-2">
                            <LocationMarkerIcon
                                color="grey"
                                opacity={0.4}
                                size={22}
                            />
                            <Text className="text-xs text-gray-500">
                                Nearby . {address}
                            </Text>
                        </View>
                    </View>
                    <Text>{shor_description}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default ResturantScreen;
