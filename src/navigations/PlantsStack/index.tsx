import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ConsultPlantScreen } from "@screens/ConsultPlant";

import { ListPlantsScreen } from "@screens/ListPlants";

import { useTheme } from "@providers/ThemeProvider";
import { createDefaultScreenOptions } from "@navigations/common/screenOptions";

type PlantsStackParamsList = {
  ListPlantsScreen: undefined;
  ConsultPlantScreen: { plantId: string; plantPopularName: string };
};

const Stack = createNativeStackNavigator<PlantsStackParamsList>();

const PlantsStack = () => {
  const { theme } = useTheme();
  const defaultScreenOptions = createDefaultScreenOptions(theme);

  return (
    <Stack.Navigator
      id="PlantStack"
      initialRouteName={"ListPlantsScreen"}
      screenOptions={defaultScreenOptions}
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
          headerTitle: props.route.params.plantPopularName,
        })}
      />
    </Stack.Navigator>
  );
};

export { PlantsStack, PlantsStackParamsList };
