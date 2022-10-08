import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
  type NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ConsultPlantScreen } from "@screens/ConsultPlant";

import { ListPlantsScreen } from "@screens/ListPlants";

import { useTheme } from "@providers/ThemeProvider";

type PlantsStackParamsList = {
  ListPlantsScreen: undefined;
  ConsultPlantScreen: { plantId: string };
};

type CommonScreenOptions = Pick<
  NativeStackNavigationOptions,
  "headerTintColor" | "headerStyle" | "animation" | "animationDuration"
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
    <Stack.Navigator
      id="PlantStack"
      initialRouteName={"ListPlantsScreen"}
      screenOptions={commonScreenOptions}
    >
      <Stack.Screen
        name={"ListPlantsScreen"}
        component={ListPlantsScreen}
        options={{
          headerTitle: "Listagem de Plantas",
        }}
      />

      <Stack.Screen
        name="ConsultPlantScreen"
        component={ConsultPlantScreen}
        options={(props) => ({
          headerTitle: `Planta ${props.route.params.plantId}`,
        })}
      />
    </Stack.Navigator>
  );
};

export { PlantsStack, PlantsStackParamsList };
