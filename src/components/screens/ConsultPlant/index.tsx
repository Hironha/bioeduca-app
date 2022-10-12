import { View, Text, Pressable } from "react-native";
import { PlantPreviewCard } from "@molecules/PlantPreviewCard";

import { type PlantsStackParamsList } from "@navigations/PlantsStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type ConsultPlantScreenProps = NativeStackScreenProps<PlantsStackParamsList & BottomTabsParamsList>;

const ConsultPlantScreen = ({ route, navigation }: ConsultPlantScreenProps) => {
  return (
    <View>
      <Text>Consult plant screen</Text>
      <Pressable onPress={() => navigation.navigate("ListPlantsScreen")}>
        <Text>To List</Text>
      </Pressable>

      <PlantPreviewCard
        imageURI="https://cdn.dribbble.com/users/5160402/screenshots/13988125/media/ba09044750f6606832c92de8f98a25cd.png?compress=1&resize=400x300"
        popularName="Teste"
        scientificName="Teste123"
      />
    </View>
  );
};

export { ConsultPlantScreen, ConsultPlantScreenProps };
