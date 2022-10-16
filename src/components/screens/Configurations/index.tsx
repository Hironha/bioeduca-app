import { useState } from "react";

import { ScreenLayout } from "@atoms/ScreenLayout";
import { SwitchContainer, SwitchLabel, SwitchToggle } from "./styles";

import { useTheme } from "@providers/ThemeProvider";

import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type ConfigurationsStackParamsList } from "@navigations/ConfigurationsStack";

type ConfigurationsScreenProps = NativeStackScreenProps<
  ConfigurationsStackParamsList & BottomTabsParamsList,
  "ConfigurationsScreen"
>;

const ConfigurationsScreen = ({ route, navigation }: ConfigurationsScreenProps) => {
  const { themeType, setTheme } = useTheme();
  const [darkModeEnabled, setDarkModeEnabled] = useState(themeType === "dark");
  const handleThemeSwitchChange = (enabled: boolean) => {
    setTheme(enabled ? "dark" : "default");
    setDarkModeEnabled((enabled) => !enabled);
  };

  return (
    <ScreenLayout>
      <SwitchContainer>
        <SwitchLabel color="font" size="medium">
          Habilitar tema escuro
        </SwitchLabel>
        <SwitchToggle value={darkModeEnabled} onValueChange={handleThemeSwitchChange} />
      </SwitchContainer>
    </ScreenLayout>
  );
};

export { ConfigurationsScreen, ConfigurationsScreenProps };
