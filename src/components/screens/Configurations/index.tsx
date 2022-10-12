import { ScreenLayout } from "@molecules/ScreenLayout";

import { BottomTabsParamsList } from "@navigations/BottomNavigation";

import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type ConfigurationsStackParamsList } from "@navigations/ConfigurationsStack";

type ConfigurationsScreenProps = NativeStackScreenProps<
  ConfigurationsStackParamsList & BottomTabsParamsList,
  "ConfigurationsScreen"
>;

const ConfigurationsScreen = ({ route, navigation }: ConfigurationsScreenProps) => {
  return <ScreenLayout></ScreenLayout>;
};

export { ConfigurationsScreen, ConfigurationsScreenProps };
