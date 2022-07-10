import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: "pink",
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
      <CategoryCard url="https://via.placeholder.com/600/92c952" />
    </ScrollView>
  );
};

export default Categories;
