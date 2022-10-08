import { View, Text, Pressable } from "react-native";

import { type PlantsStackScreenProps } from "@navigations/PlantsStack";

type ListPlantsScreenProps = PlantsStackScreenProps<"ListPlantsScreen">;

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
