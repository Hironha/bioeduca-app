import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTheme } from "@providers/ThemeProvider";
import { createDefaultScreenOptions } from "@navigations/common/screenOptions";
import { ConfigurationsScreen } from "@screens/Configurations";

type ConfigurationsStackParamsList = {
  ConfigurationsScreen: undefined;
};

const Stack = createNativeStackNavigator<ConfigurationsStackParamsList>();

const ConfigurationsStack = () => {
  const { theme } = useTheme();

  const defaultScreenOptions = createDefaultScreenOptions(theme);

  return (
    <Stack.Navigator initialRouteName={"ConfigurationsScreen"} screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name={"ConfigurationsScreen"}
        component={ConfigurationsScreen}
        options={{ headerTitle: "Configurações" }}
      />
    </Stack.Navigator>
  );
};

export { ConfigurationsStack, ConfigurationsStackParamsList };
