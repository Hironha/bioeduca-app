import styled, { type ColorOptions } from "styled-components/native";
import { Pressable } from "react-native";

type CustomPressableProps = {
  /** @default primary */
  color?: keyof ColorOptions;
};

const LeftIconContainer = styled.View`
  margin-right: 8px;
`;

const RightIconContainer = styled.View`
  margin-left: 8px;
`;

const CustomPressable = styled(Pressable)<CustomPressableProps>`
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.border.radius};
  padding: 6px 12px;
  background-color: ${(props) => props.theme.colors[props.color || "primary"]};
`;

export { LeftIconContainer, RightIconContainer, CustomPressable };
