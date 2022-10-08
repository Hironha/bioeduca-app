import { View, Text, Pressable } from "react-native";

import { type PlantsStackScreenProps } from "@organisms/PlantsStack";

type ListPlantsScreenProps = PlantsStackScreenProps<"ListPlants">;

export const ListPlantsScreen = ({ route, navigation }: ListPlantsScreenProps) => {
  return (
    <View>
      <Text>List plants screen</Text>
      <Pressable onPress={() => navigation.navigate("ConsultPlant", { plantId: "teste" })}>
        <Text>To Consult</Text>
      </Pressable>
    </View>
  );
};
