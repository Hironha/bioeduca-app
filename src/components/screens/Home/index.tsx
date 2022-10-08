import { View, Text, Pressable } from "react-native";

import { type HomeStackParamsList } from "@navigations/HomeStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackScreenProps<HomeStackParamsList & BottomTabsParamsList>;

export const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("PlantsTab", {
            screen: "ConsultPlantScreen",
            params: { plantId: "Teste" },
            initial: false,
          });
        }}
      >
        <Text>Teste</Text>
      </Pressable>
    </View>
  );
};
