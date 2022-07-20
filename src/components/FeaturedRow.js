import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../../sanity";

const FeaturedRow = ({ id, title, discription }) => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetchCatogory(), [];
    });
    const fetchCatogory = async () => {
        const data = await client.fetch(
            `
        *[_type=="featured" && _id == $id]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
          type->{ 
               name
              }
            },
          }[0]`,
            { id }
        );

        return setRestaurants(data?.restaurants);
    };
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
                {restaurants?.map((restaurant) => (
                    <RestaurantCard
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        shor_description={restaurant.long}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
