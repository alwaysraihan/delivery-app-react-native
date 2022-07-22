import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

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
        </ScrollView>
    );
};

export default ResturantScreen;
