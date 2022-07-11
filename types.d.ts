import type { CompositeNavigationProp } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { StackNavigationProp } from "@react-navigation/stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import type { StackNavigationOptions } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
};

type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Home">,
  StackNavigationProp<StackParamList>
>;

type TabParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
  Profile: { userId: string };
};

interface FeaturedRowProps {
  id: number;
  title: string;
  description: string;
}

interface RestaurantCardProps {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: string;
  long: string;
  lat: string;
}
