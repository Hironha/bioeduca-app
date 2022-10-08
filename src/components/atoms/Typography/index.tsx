import React from "react";

import { CustomText, type CustomTextProps } from "./styles";

import { type TextProps } from "react-native";

type TypographyProps = TextProps & Partial<CustomTextProps>;

export const Typography = (props: TypographyProps) => {
  const { children, ...textProps } = props;

  return <CustomText {...textProps}>{children}</CustomText>;
};
