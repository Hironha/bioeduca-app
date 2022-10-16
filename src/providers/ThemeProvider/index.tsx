import { useState, useMemo, useContext, createContext } from "react";
import { ThemeProvider as StyledThemeProvider, type DefaultTheme } from "styled-components/native";

import { defaultTheme, darkTheme } from "./themes";

type ThemeType = "default" | "dark";

type ThemeContext = {
  theme: DefaultTheme;
  themeType: ThemeType;
  setTheme: (type: ThemeType) => void;
};

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemeType>("default");

  const currentTheme = useMemo(() => {
    switch (theme) {
      case "dark":
        return darkTheme;
      case "default":
        return defaultTheme;
      default:
        return defaultTheme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ setTheme, theme: currentTheme, themeType: theme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
