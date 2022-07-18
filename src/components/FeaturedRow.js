import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, discription }) => {
    return (
        <View>
            <View className="flex-row items-center justify-between mx-4 mt-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{discription}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className="pt-4"
            >
                {/* Restaurant Card  */}
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Test"
                    rating={4.5}
                    genre="Japnese"
                    address="123 Dhaka"
                    shor_description="This is description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Test"
                    rating={4.5}
                    genre="Japnese"
                    address="123 Dhaka"
                    shor_description="This is description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
