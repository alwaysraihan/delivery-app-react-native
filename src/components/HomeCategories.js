import { View, ScrollView, Text, Image } from "react-native";
import React from "react";
import HomeScreenCategoresCard from "./HomeScreenCategoresCard";

const HomeCategories = () => {
    return (
        <ScrollView
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* Categories card  */}
            <HomeScreenCategoresCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing"
            />
            <HomeScreenCategoresCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing"
            />
            <HomeScreenCategoresCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing"
            />
            <HomeScreenCategoresCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing"
            />
            <HomeScreenCategoresCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing"
            />
            <HomeScreenCategoresCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing"
            />
            <HomeScreenCategoresCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing"
            />
            <HomeScreenCategoresCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing"
            />
        </ScrollView>
    );
};

export default HomeCategories;
