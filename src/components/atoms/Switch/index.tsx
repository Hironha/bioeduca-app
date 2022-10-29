import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from "react-native";
import { useTheme } from "@providers/ThemeProvider";
import { type ColorOptions } from "styled-components/native";

type SwitchProps = Omit<RNSwitchProps, "thumbColor" | "trackColor" | "value"> & {
  value: boolean;
  disabledColor?: keyof ColorOptions;
  color?: keyof ColorOptions;
};

const Switch = (props: SwitchProps) => {
  const { theme } = useTheme();

  const getColor = (color: string) => {
    if (props.disabled && props.disabledColor) {
      return props.disabledColor;
    }
    return color;
  };

  const trackColor = getColor(`${theme.colors.font}35`);

  const thumbColor = (() => {
    if (props.value) return getColor(theme.colors[props.color ?? "primary"]);
    return getColor(theme.colors.lightGray);
  })();

  return (
    <RNSwitch
      {...props}
      trackColor={{ false: trackColor, true: trackColor }}
      thumbColor={thumbColor}
    />
  );
};

export { Switch, SwitchProps };
