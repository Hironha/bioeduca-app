import React, { cloneElement, forwardRef } from "react";
import { ScreenLayoutContainer, ContentContainer } from "./styles";

import { type ScrollViewProps, type ViewProps } from "react-native";

type ScreenLayoutProps = {
  children?: React.ReactNode;
  scrollView?: React.ReactElement<ScrollViewProps>;
};

const ScreenLayoutComponent = (props: ScreenLayoutProps, ref: React.ForwardedRef<ViewProps>) => {
  return (
    <ScreenLayoutContainer ref={ref}>
      {props.scrollView ? (
        cloneElement(props.scrollView, {}, <ContentContainer>{props.children}</ContentContainer>)
      ) : (
        <ContentContainer>{props.children}</ContentContainer>
      )}
    </ScreenLayoutContainer>
  );
};

const ScreenLayout = forwardRef(ScreenLayoutComponent);

export { ScreenLayout, ScreenLayoutProps };
