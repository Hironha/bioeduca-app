import { useState } from "react";

import { ScreenLayout } from "@atoms/ScreenLayout";
import { SwitchableItem } from "./SwitchableItem";
import { ConfigurationItemContainer } from "./styles";

import { useTheme } from "@providers/ThemeProvider";

import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type ConfigurationsStackParamsList } from "@navigations/ConfigurationsStack";

type ConfigurationsScreenProps = NativeStackScreenProps<
  ConfigurationsStackParamsList & BottomTabsParamsList,
  "ConfigurationsScreen"
>;

const ConfigurationsScreen = (props: ConfigurationsScreenProps): React.ReactElement => {
  const { themeType, setTheme } = useTheme();
  const [darkModeEnabled, setDarkModeEnabled] = useState(themeType === "dark");

  const handleThemeSwitchChange = (enabled: boolean): void => {
    setTheme(enabled ? "dark" : "default");
    setDarkModeEnabled((enabled) => !enabled);
  };

  return (
    <ScreenLayout>
      <ConfigurationItemContainer>
        <SwitchableItem
          label="Habilitar tema escuro"
          value={darkModeEnabled}
          onValueChange={handleThemeSwitchChange}
        />
      </ConfigurationItemContainer>
    </ScreenLayout>
  );
};

export { ConfigurationsScreen, ConfigurationsScreenProps };
