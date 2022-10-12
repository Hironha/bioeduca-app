import { ActivityIndicator, type ActivityIndicatorProps } from "react-native";

import { useTheme } from "@providers/ThemeProvider";

import { type ColorOptions } from "styled-components/native";

type LoadingProps = Omit<ActivityIndicatorProps, "color"> & {
  /** @default primary */
  color?: keyof ColorOptions;
};

const Loading = (props: LoadingProps) => {
  const { color, ...activityIndicatorProps } = props;
  const { theme } = useTheme();
  return (
    <ActivityIndicator {...activityIndicatorProps} color={theme.colors[props.color ?? "primary"]} />
  );
};

export { Loading, LoadingProps };
