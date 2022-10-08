import { View, Text } from "react-native";

import { type HomeStackScreenProps } from "@organisms/HomeStack";

type HomeScreenProps = HomeStackScreenProps<"HomeStack">;

export const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};
