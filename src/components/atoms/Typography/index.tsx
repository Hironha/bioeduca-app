import React, { forwardRef } from "react";

import { CustomText, type CustomTextProps } from "./styles";

import { type Text, type TextProps } from "react-native";

type TypographyProps = Partial<CustomTextProps> & TextProps;

const TypographyComponent = (props: TypographyProps, ref: React.ForwardedRef<Text>) => {
  const { children, ...textProps } = props;

  return (
    <CustomText {...textProps} ref={ref}>
      {children}
    </CustomText>
  );
};

const Typography = forwardRef(TypographyComponent);

export { Typography, TypographyProps };
