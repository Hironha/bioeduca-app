import { View, Text, Pressable } from "react-native";

import { type PlantsStackScreenProps } from "@organisms/PlantsStack";

type ConsultPlantScreenProps = PlantsStackScreenProps<"ConsultPlant">;

export const ConsultPlantScreen = ({ route, navigation }: ConsultPlantScreenProps) => {
  return (
    <View>
      <Text>Consult plant screen</Text>
      <Pressable onPress={() => navigation.navigate("ListPlants")}>
        <Text>To List</Text>
      </Pressable>
    </View>
  );
};
