import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
  type NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { HomeScreen } from "@screens/Home";
import { useTheme } from "@providers/ThemeProvider";

type HomeStackParamsList = {
  HomeScreen: undefined;
};

type CommonScreenOptions = Pick<
  NativeStackNavigationOptions,
  "headerTintColor" | "headerStyle" | "animation" | "animationDuration"
>;

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
  const { theme } = useTheme();

  const commonScreenOptions: CommonScreenOptions = {
    animation: "slide_from_right",
    animationDuration: 150,
    headerTintColor: theme.colors.white,
    headerStyle: { backgroundColor: theme.colors.primary },
  };

  return (
    <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={commonScreenOptions}>
      <Stack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{ headerTitle: "Início" }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack, HomeStackParamsList };