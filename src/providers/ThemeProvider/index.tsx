import { useState, useMemo, useContext, createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";

import { defaultTheme } from "./themes";

type ThemeType = "default" | "dark";

type ThemeContext = {
  theme: ThemeType;
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
      case "default":
        return defaultTheme;
      default:
        return defaultTheme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
