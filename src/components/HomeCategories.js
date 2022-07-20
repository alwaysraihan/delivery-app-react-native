import { View, ScrollView, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import HomeScreenCategoresCard from "./HomeScreenCategoresCard";
import sanityClient, { urlFor } from "../../sanity";

const HomeCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        sanityClient
            .fetch(
                `
        *[_type=="category"]
        `
            )
            .then((data) => {
                setCategories(data);
            });
    }, []);

    return (
        <ScrollView
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* Categories card  */}
            {categories.map((category) => (
                <HomeScreenCategoresCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                />
            ))}
        </ScrollView>
    );
};

export default HomeCategories;
