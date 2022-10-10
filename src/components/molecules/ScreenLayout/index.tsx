import React, { forwardRef } from "react";
import { SafeAreaView } from "react-native";
import { ScreenLayoutContainer } from "./styles";

import { type ViewProps } from "react-native";

type ScreenLayoutProps = {
  children?: React.ReactNode;
};

const ScreenLayoutComponent = (props: ScreenLayoutProps, ref: React.ForwardedRef<ViewProps>) => {
  return (
    <ScreenLayoutContainer ref={ref}>
      <SafeAreaView>{props.children}</SafeAreaView>
    </ScreenLayoutContainer>
  );
};

const ScreenLayout = forwardRef(ScreenLayoutComponent);

export { ScreenLayout, ScreenLayoutProps };
