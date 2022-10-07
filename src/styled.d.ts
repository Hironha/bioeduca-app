import "styled-components/native";

declare module "styled-components/native" {
  export type FontSizeOptions = {
    small: string;
    medium: string;
    large: string;
  };

  export type ColorOptions = {
    background: string;
    primary: string;
    success: string;
    warning: string;
    error: string;
    font: string
  };

  export interface DefaultTheme {
    colors: ColorOptions;
    border: {
      radius: string;
    };
    boxShadow: string;
    fontSize: FontSizeOptions;
  }
}
