import { View, Text, Pressable } from "react-native";

import { type PlantsStackScreenProps } from "@navigations/PlantsStack";

type ConsultPlantScreenProps = PlantsStackScreenProps<"ConsultPlantScreen">;

export const ConsultPlantScreen = ({ route, navigation }: ConsultPlantScreenProps) => {
  return (
    <View>
      <Text>Consult plant screen</Text>
      <Pressable onPress={() => navigation.navigate("ListPlantsScreen")}>
        <Text>To List</Text>
      </Pressable>
    </View>
  );
};
