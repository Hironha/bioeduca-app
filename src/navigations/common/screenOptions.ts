import { type DefaultTheme } from "styled-components/native";
import { type NativeStackNavigationOptions } from "@react-navigation/native-stack";

type DefaultScreenOptions = Pick<
  NativeStackNavigationOptions,
  "headerTintColor" | "headerStyle" | "animation" | "animationDuration"
>;

export const createDefaultScreenOptions = (theme: DefaultTheme): DefaultScreenOptions => {
  return {
    animation: "slide_from_right",
    animationDuration: 150,
    headerTintColor: theme.colors.white,
    headerStyle: { backgroundColor: theme.colors.primary },
  };
};
