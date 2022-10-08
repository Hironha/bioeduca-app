import { View, Text, Pressable } from "react-native";

import { type PlantsStackParamsList } from "@navigations/PlantsStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type ListPlantsScreenProps = NativeStackScreenProps<PlantsStackParamsList & BottomTabsParamsList>;

export const ListPlantsScreen = ({ route, navigation }: ListPlantsScreenProps) => {
  return (
    <View>
      <Text>List plants screen</Text>
      <Pressable onPress={() => navigation.navigate("ConsultPlantScreen", { plantId: "teste" })}>
        <Text>To Consult</Text>
      </Pressable>
    </View>
  );
};
