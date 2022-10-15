import Animated from "react-native-reanimated";
import { View, type StyleProp, type ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { CollpaseLabelContainer, CollpaseContainer, CollapseTitleContainer } from "./styles";

import { useTheme } from "@providers/ThemeProvider";
import { pxToNumber } from "@utils/convertions";
import { useCollapsed } from "./hooks/useCollapse";
import { useCollapseAnimation } from "./hooks/useCollapseAnimation";
import { useCollapseIconAnimation } from "./hooks/useCollapseIconAnimation";

import { type ColorOptions, type FontSizeOptions } from "styled-components/native";

type CollapseProps = {
  style?: StyleProp<ViewStyle>;
  iconStyle?: { size?: keyof FontSizeOptions; color?: keyof ColorOptions };
  label: JSX.Element;
  children?: React.ReactNode;
};

const Collapse = (props: CollapseProps) => {
  const { theme } = useTheme();
  const [collapsed, toggleCollapse] = useCollapsed();
  const [collapseAnimation, toggleCollapseAnimation] = useCollapseAnimation();
  const [collapseIconAnimation, toggleCollapseIconAnimation] = useCollapseIconAnimation();

  const iconSize = (() => {
    const sizeType = props.iconStyle?.size ?? "medium";
    return pxToNumber(theme.fontSize[sizeType]);
  })();

  const iconColor = (() => {
    const colorType = props.iconStyle?.color ?? "font";
    return theme.colors[colorType];
  })();

  const handleToggleCollapse = () => {
    const animationDuration = 150;

    toggleCollapse(animationDuration);
    toggleCollapseAnimation(animationDuration);
    toggleCollapseIconAnimation(animationDuration);
  };

  return (
    <View>
      <CollapseTitleContainer style={props.style}  onPress={handleToggleCollapse}>
        <CollpaseLabelContainer>{props.label}</CollpaseLabelContainer>

        <Animated.View style={[collapseIconAnimation]}>
          <AntDesign name="caretdown" size={iconSize} color={iconColor} />
        </Animated.View>
      </CollapseTitleContainer>

      <CollpaseContainer style={[collapseAnimation]}>
        {collapsed ? props.children : null}
      </CollpaseContainer>
    </View>
  );
};

export { Collapse, CollapseProps };
