import { View, Text, ScrollView } from "react-native";
import Categories from "./Categories";
import FeaturedRow from "./FeaturedRow";

const Body = () => {
  return (
    <ScrollView className=" bg-gray-1 00">
      {/* categories */}
      <Categories />
      {/* featured rows */}
      <FeaturedRow title="Featured" id={3} description="hello world" />
      <FeaturedRow title="Tasty Discounts" id={3} description="hello world" />
      <FeaturedRow title="offers near you!" id={3} description="hello world" />
    </ScrollView>
  );
};

export default Body;
