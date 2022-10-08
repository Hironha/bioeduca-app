import {
  createBottomTabNavigator,
  type BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeStack } from "@organisms/HomeStack";
import { PlantsStack } from "@organisms/PlantsStack";

import { useTheme } from "@providers/ThemeProvider";
import { createRouteConfig } from "./utils/route";

import { type RouteProp } from "@react-navigation/native";

type BottomTabsParamsList = {
  Home: undefined;
  Plants: undefined;
};

export type BottomTabRoute = RouteProp<BottomTabsParamsList, keyof BottomTabsParamsList>;

export type BottomTabRouteProps<T extends keyof BottomTabsParamsList> = RouteProp<
  BottomTabsParamsList,
  T
>;

const BottomTabs = createBottomTabNavigator<BottomTabsParamsList>();

export const BottomNavigation = () => {
  const { theme } = useTheme();

  const createScreenOptions = (route: BottomTabRoute): BottomTabNavigationOptions => {
    const { icon, label } = createRouteConfig(route);

    return {
      tabBarIcon: ({ color, size }) => {
        return <Ionicons name={icon} color={color} size={size} />;
      },
      tabBarLabel: label,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.font,
      headerShown: false,
    };
  };

  return (
    <BottomTabs.Navigator screenOptions={({ route }) => createScreenOptions(route)}>
      <BottomTabs.Screen name="Home" component={HomeStack} />
      <BottomTabs.Screen name="Plants" component={PlantsStack} />
    </BottomTabs.Navigator>
  );
};
