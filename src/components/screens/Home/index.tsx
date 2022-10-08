import { View, Text, Pressable } from "react-native";

import { type HomeStackScreenProps } from "@navigations/HomeStack";

// type HomeScreenProps = HomeStackScreenProps<"HomeScreen">;

export const HomeScreen = ({ route, navigation }: any) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Pressable
        onPress={() =>
          navigation.navigate("PlantsTab", {
            screen: "ConsultPlantScreen",
            params: { plantId: "teste" },
          })
        }
      >
        <Text>Teste</Text>
      </Pressable>
    </View>
  );
};
