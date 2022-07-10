import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { HomeScreenNavigationProp } from "../../types";
import type { StackNavigationOptions } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Body from "../components/Body";
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false } as StackNavigationOptions);
  }, []);
  return (
    <>
      <SafeAreaView className=" bg-white pt-3 ">
        {/* header */}
        <View className="flex-row py-3 space-x-3 items-center mx-4">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className=" h-7 w-7 bg-gray-200 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className=" font-bold text-gray-500 text-xs">
              Deliver now!
            </Text>
            <View className=" flex-row items-center ">
              <Text className="font-bold text-xl ">Current location</Text>
              <ChevronDownIcon size={20} color="#0cb" />
            </View>
          </View>
          <UserIcon size={32} color="#0cb" />
        </View>
        {/* search bar */}
        <View className="flex-row mx-4  items-center space-x-2 mt-2 pb-2">
          <View className="flex-row  flex-1 bg-gray-300 p-2">
            <SearchIcon color="#616464" />
            <TextInput
              className=" flex-1 text-base"
              placeholder="Restaurants and cuisines"
            />
          </View>
          <AdjustmentsIcon color="#0cb" />
        </View>
        {/* body */}
      </SafeAreaView>
      <Body />
    </>
  );
};

export default HomeScreen;
