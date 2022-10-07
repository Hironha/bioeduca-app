import styled, { type FontSizeOptions, ColorOptions } from "styled-components/native";
import { type DefaultTheme, type ThemedStyledProps } from "styled-components";

type CustomTextSize = keyof FontSizeOptions;
type CustomTextColor = keyof ColorOptions;

export type CustomTextProps = {
  size: CustomTextSize;
  color: CustomTextColor;
  bold: boolean;
  italic: boolean;
};

const getTextSize = (props: ThemedStyledProps<CustomTextProps, DefaultTheme>) => {
  return props.theme.fontSize[props.size];
};

const getTextColor = (props: ThemedStyledProps<CustomTextProps, DefaultTheme>) => {
  return props.theme.colors[props.color];
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
  font-size: ${getTextSize};
  color: ${getTextColor};
  font-weight: ${getFontWeight};
  font-style: ${getFontStyle};
`;
