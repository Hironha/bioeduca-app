import React, { forwardRef } from "react";
import { TextInput, type TextInputProps } from "react-native";

import {
  CustomTextInput,
  IconContainer,
  InputContainer,
  type CustomTextInputProps,
} from "./styles";

type InputProps = Omit<TextInputProps, "children"> &
  CustomTextInputProps & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

const InputComponent = (props: InputProps, ref: React.ForwardedRef<TextInput>) => {
  const { color, fontSize, leftIcon, rightIcon, ...textInputProps } = props;

  return (
    <InputContainer>
      {leftIcon && (
        <IconContainer color={color} fontSize={fontSize}>
          {leftIcon}
        </IconContainer>
      )}

      <CustomTextInput {...textInputProps} o ref={ref} />

      {rightIcon && <IconContainer fontSize={fontSize}>{rightIcon}</IconContainer>}
    </InputContainer>
  );
};

const Input = forwardRef(InputComponent);

export { Input, InputProps };
