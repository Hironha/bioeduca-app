import "styled-components/native";

declare module "styled-components/native" {
  export type FontSizeOptions = {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };

  export type ColorOptions = {
    background: string;
    primary: string;
    success: string;
    warning: string;
    error: string;
    font: string
    white: string;
    lightGray: string;
  };

  export interface DefaultTheme {
    colors: ColorOptions;
    border: {
      radius: string;
    };
    fontSize: FontSizeOptions;
  }
}
