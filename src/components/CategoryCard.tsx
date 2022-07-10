import { View, Text, Image, TouchableOpacity } from "react-native";

const CategoryCard = ({ url }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image source={{ uri: url }} className="w-20 h-20" />
      <Text className=" absolute bottom-1 left-1 text-white font-bold">
        CategoryCard
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
