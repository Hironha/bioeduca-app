import { View, Text, Pressable } from "react-native";


import { type PlantsStackParamsList } from "@navigations/PlantsStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type ConsultPlantScreenProps = NativeStackScreenProps<PlantsStackParamsList & BottomTabsParamsList>;

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
