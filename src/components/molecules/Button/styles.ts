import styled, { css, type ColorOptions } from "styled-components/native";
import { Pressable } from "react-native";

type CustomPressableProps = {
  /** @default primary */
  color?: keyof ColorOptions;
  /** @default false  */
  ghost?: boolean;
};

const createGhostPressableStyle = (color: keyof ColorOptions) => css`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px ${(props) => props.theme.colors[color]} solid;
`;

const createSolidPressableStyle = (color: keyof ColorOptions) => css`
  background-color: ${(props) => props.theme.colors[color]};
`;

const createPressableStyle = (ghost: boolean, color: keyof ColorOptions) => {
  if (ghost) return createGhostPressableStyle(color);
  return createSolidPressableStyle(color);
};

const LeftIconContainer = styled.View`
  margin-right: 8px;
`;

const RightIconContainer = styled.View`
  margin-left: 8px;
`;

const CustomPressable = styled(Pressable)<CustomPressableProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.border.radius};
  padding: 6px 12px;
  ${(props) => createPressableStyle(props.ghost ?? false, props.color ?? "primary")}
`;

export { LeftIconContainer, RightIconContainer, CustomPressable };
