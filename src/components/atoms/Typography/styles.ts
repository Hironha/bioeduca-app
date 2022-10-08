import styled, { type FontSizeOptions, ColorOptions } from "styled-components/native";
import { type DefaultTheme, type ThemedStyledProps } from "styled-components";

type CustomTextSize = keyof FontSizeOptions;
type CustomTextColor = keyof ColorOptions;

export type CustomTextProps = {
  /** @default medium */
  size: CustomTextSize;
  /** @default font */
  color: CustomTextColor;
  /** @default false */
  bold: boolean;
  /** @default false */
  italic: boolean;
};

const getFontSize = (props: ThemedStyledProps<CustomTextProps, DefaultTheme>) => {
  const defaultSize: CustomTextSize = 'medium'
  return props.theme.fontSize[props.size] ?? props.theme.fontSize[defaultSize];
};

const getFontColor = (props: ThemedStyledProps<CustomTextProps, DefaultTheme>) => {
  const defaultColor: CustomTextColor = 'font'
  return props.theme.colors[props.color] ?? props.theme.colors[defaultColor];
};

const getFontWeight = (
  props: ThemedStyledProps<CustomTextProps, DefaultTheme>
): "bold" | "normal" => {
  return props.bold ? "bold" : "normal";
};

const getFontStyle = (
  props: ThemedStyledProps<CustomTextProps, DefaultTheme>
): "italic" | "normal" => {
  return props.italic ? "italic" : "normal";
};

export const CustomText = styled.Text<CustomTextProps>`
  font-size: ${getFontSize};
  color: ${getFontColor};
  font-weight: ${getFontWeight};
  font-style: ${getFontStyle};
`;
