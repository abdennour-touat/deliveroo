import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { RootStackParamList } from "./types";
import { StatusBar } from "expo-status-bar";

const stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <StatusBar backgroundColor="#0cb" />

        {/* screens */}
        <stack.Navigator>
          <stack.Screen name="Home" component={HomeScreen}></stack.Screen>
        </stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
