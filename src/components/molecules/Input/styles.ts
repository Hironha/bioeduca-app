import { type ThemedStyledProps } from "styled-components";
import styled, {
  type FontSizeOptions,
  type DefaultTheme,
  type ColorOptions,
} from "styled-components/native";

type CustomTextInputProps = {
  /** @default medium */
  fontSize?: keyof FontSizeOptions;
  /** @default font */
  color?: keyof ColorOptions;
};

const getCustomTextInputFontSize = (
  props: ThemedStyledProps<Pick<CustomTextInputProps, "fontSize">, DefaultTheme>
) => {
  const defaultFontSize: keyof FontSizeOptions = "medium";
  if (!props.fontSize) return props.theme.fontSize[defaultFontSize];
  return props.theme.fontSize[props.fontSize];
};

const getCustomTextInputColor = (
  props: ThemedStyledProps<Pick<CustomTextInputProps, "color">, DefaultTheme>
) => {
  const defaultColor: keyof ColorOptions = "font";
  if (!props.color) return props.theme.colors[defaultColor];
  return props.theme.colors[props.color];
};

const InputContainer = styled.View<Pick<CustomTextInputProps, "color">>`
  flex-direction: row;
  align-items: center;

  box-sizing: border-box;
  padding: 4px;
  border: 1px ${getCustomTextInputColor} solid;
  border-radius: ${(props) => props.theme.border.radius};
`;

const CustomTextInput = styled.TextInput<CustomTextInputProps>`
  font-size: ${getCustomTextInputFontSize};
  color: ${getCustomTextInputColor};
  flex: 1;
`;

const IconContainer = styled.View<Pick<CustomTextInputProps, "fontSize">>`
  width: ${getCustomTextInputFontSize};
  height: ${getCustomTextInputFontSize};
`;

export { InputContainer, CustomTextInput, IconContainer, CustomTextInputProps };
