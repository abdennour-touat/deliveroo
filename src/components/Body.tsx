import { View, Text, ScrollView } from "react-native";
import Categories from "./Categories";

const Body = () => {
  return (
    <ScrollView className=" bg-gray-1 00">
      {/* categories */}
      <Categories />
    </ScrollView>
  );
};

export default Body;
