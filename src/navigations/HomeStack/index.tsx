import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@screens/Home";
import { useTheme } from "@providers/ThemeProvider";
import { createDefaultScreenOptions } from "@navigations/common/screenOptions";

type HomeStackParamsList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
  const { theme } = useTheme();

  const defaultScreenOptions = createDefaultScreenOptions(theme);

  return (
    <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{ headerTitle: "Início" }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack, HomeStackParamsList };
