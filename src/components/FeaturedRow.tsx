import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { FeaturedRowProps } from "../../types";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, id, description }: FeaturedRowProps) => {
  return (
    <View>
      <View className=" mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#0cb" />
      </View>
      <Text className=" text-xs text-gray-500 px-4 ">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className=" pt-4"
      >
        {/* restaurantCards */}
        <RestaurantCard
          address="ben dali"
          dishes="hll"
          genre="jdj"
          id={3}
          imgUrl="https://links.papareact.com/wru"
          lat="3"
          long="33"
          rating={3}
          short_description="jfdksj"
          title="hello "
        />
        <RestaurantCard
          address="ben dali"
          dishes="hll"
          genre="jdj"
          id={3}
          imgUrl="https://links.papareact.com/wru"
          lat="3"
          long="33"
          rating={3}
          short_description="jfdksj"
          title="hello "
        />

        <RestaurantCard
          address="ben dali"
          dishes="hll"
          genre="jdj"
          id={3}
          imgUrl="https://links.papareact.com/wru"
          lat="3"
          long="33"
          rating={3}
          short_description="jfdksj"
          title="hello "
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
