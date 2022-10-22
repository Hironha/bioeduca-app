import { CustomPressable, LeftIconContainer, RightIconContainer } from "./styles";

import { type PressableProps } from "react-native";
import { type ColorOptions } from "styled-components/native";

type ButtonProps = Omit<PressableProps, "children"> & {
  ghost?: boolean
  color?: keyof ColorOptions;
  children: React.ReactNode;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};

const Button = (props: ButtonProps) => {
  const { children, leftIcon, rightIcon, ...pressableProps } = props;

  return (
    <CustomPressable {...pressableProps}>
      {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
      {children}
      {rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
    </CustomPressable>
  );
};

export { Button, ButtonProps };
