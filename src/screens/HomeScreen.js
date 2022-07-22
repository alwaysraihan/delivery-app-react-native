import React, { useEffect, useLayoutEffect, useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";
import HomeCategories from "../components/HomeCategories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../../sanity";
const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategory, setFeaturedCategory] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        fetchCatogory();
    }, []);
    const fetchCatogory = async () => {
        const data = await client.fetch(`*[_type=="featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
          type->{ 
               name
              }
            },
          }`);

        return setFeaturedCategory(data);
    };

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
                <View className="flex-row overflow-hidden  flex-1 space-x-2 bg-gray-200 p-3">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        className="pr-4"
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsIcon size={20} color="#00ccbb" />
            </View>
            {/* Body  */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="bg-gray-100 flex-1"
                contentContainerStyle={{
                    paddingBottom: 150,
                }}
            >
                {/* Catagories  */}

                <HomeCategories />

                {/* Featured  */}

                {featuredCategory?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        discription={category.short_description}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
