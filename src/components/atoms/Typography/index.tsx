import React, { forwardRef } from "react";
import { Text, TextProps } from "react-native";

import { CustomText, type CustomTextProps } from "./styles";

type TypographyProps = TextProps & Partial<CustomTextProps>;

const TypographyComponent = (props: TypographyProps, ref: React.ForwardedRef<Text>) => {
  const {
    children,
    color = "font",
    size = "medium",
    bold = false,
    italic = false,
    ...textProps
  } = props;

  return (
    <CustomText {...textProps} ref={ref}>
      {children}
    </CustomText>
  );
};

export const Typography = forwardRef(TypographyComponent);
