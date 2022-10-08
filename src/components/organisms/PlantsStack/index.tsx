import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
  type NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ConsultPlantScreen } from "@screens/ConsultPlant";

import { ListPlantsScreen } from "@screens/ListPlants";

import { useTheme } from "@providers/ThemeProvider";

type PlantsStackParamsList = {
  ListPlants: undefined;
  ConsultPlant: { plantId: string };
};

type CommonScreenOptions = Pick<
  NativeStackNavigationOptions,
  "headerTintColor" | "headerStyle" | "animation" | "animationDuration"
>;

type PlantsStackScreenProps<T extends keyof PlantsStackParamsList> = NativeStackScreenProps<
  PlantsStackParamsList,
  T
>;

const Stack = createNativeStackNavigator<PlantsStackParamsList>();

const PlantsStack = () => {
  const { theme } = useTheme();

  const commonScreenOptions: CommonScreenOptions = {
    animation: "slide_from_right",
    animationDuration: 150,
    headerTintColor: theme.colors.white,
    headerStyle: { backgroundColor: theme.colors.primary },
  };

  return (
    <Stack.Navigator initialRouteName={"ListPlants"} screenOptions={commonScreenOptions}>
      <Stack.Screen
        name={"ListPlants"}
        component={ListPlantsScreen}
        options={{
          headerTitle: "Listagem de Plantas",
        }}
      />

      <Stack.Screen
        name="ConsultPlant"
        component={ConsultPlantScreen}
        options={(props) => ({
          headerTitle: `Planta ${props.route.params.plantId}`,
        })}
      />
    </Stack.Navigator>
  );
};

export { PlantsStack, PlantsStackScreenProps };
