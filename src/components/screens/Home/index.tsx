import { Text, Pressable } from "react-native";
import { ScreenLayout } from "@molecules/ScreenLayout";

import { type HomeStackParamsList } from "@navigations/HomeStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamsList & BottomTabsParamsList,
  "HomeScreen"
>;

const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  return (
    <ScreenLayout>
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
    </ScreenLayout>
  );
};

export { HomeScreen, HomeScreenProps };
