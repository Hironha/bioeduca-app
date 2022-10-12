import React, { forwardRef } from "react";
import { ScreenLayoutContainer } from "./styles";

import { type ViewProps } from "react-native";

type ScreenLayoutProps = {
  children?: React.ReactNode;
};

const ScreenLayoutComponent = (props: ScreenLayoutProps, ref: React.ForwardedRef<ViewProps>) => {
  return <ScreenLayoutContainer ref={ref}>{props.children}</ScreenLayoutContainer>;
};

const ScreenLayout = forwardRef(ScreenLayoutComponent);

export { ScreenLayout, ScreenLayoutProps };
