import {
  createBottomTabNavigator,
  type BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeStack } from "@navigations/HomeStack";
import { ConfigurationsStack } from "@navigations/ConfigurationsStack";
import { PlantsStack, type PlantsStackParamsList } from "@navigations/PlantsStack";

import { useTheme } from "@providers/ThemeProvider";
import { createRouteConfig } from "./utils/route";

import { type RouteProp } from "@react-navigation/native";
import { type INavigationParams } from "@interfaces/navigation/params";

type BottomTabsParamsList = {
  HomeTab: undefined;
  ConfigurationsTab: undefined;
  PlantsTab:
    | INavigationParams<PlantsStackParamsList, "ConsultPlantScreen">
    | INavigationParams<PlantsStackParamsList, "ListPlantsScreen">;
};

export type BottomTabRoute = RouteProp<BottomTabsParamsList, keyof BottomTabsParamsList>;

const BottomTabs = createBottomTabNavigator<BottomTabsParamsList>();

const BottomNavigation = () => {
  const { theme } = useTheme();

  const createScreenOptions = (route: BottomTabRoute): BottomTabNavigationOptions => {
    const { icon, label } = createRouteConfig(route);

    return {
      tabBarIcon: ({ color, size }) => {
        return <Ionicons name={icon} color={color} size={size} />;
      },
      tabBarStyle: { backgroundColor: theme.colors.background, height: 60 },
      tabBarLabel: label,
      tabBarLabelStyle: {
        color: theme.colors.font,
        marginBottom: 6,
        fontSize: Number(theme.fontSize.medium.replace(/\D/g, "")),
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.font,
      headerShown: false,
    };
  };

  return (
    <BottomTabs.Navigator screenOptions={({ route }) => createScreenOptions(route)}>
      <BottomTabs.Screen name="HomeTab" component={HomeStack} />
      <BottomTabs.Screen name="PlantsTab" component={PlantsStack} />
      <BottomTabs.Screen name="ConfigurationsTab" component={ConfigurationsStack} />
    </BottomTabs.Navigator>
  );
};

export { BottomNavigation, BottomTabsParamsList };
