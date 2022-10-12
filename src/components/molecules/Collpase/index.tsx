import { View, type StyleProp, type ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { CollpaseLabel, CollpaseContainer, CollapseTitleContainer } from "./styles";

import { useTheme } from "@providers/ThemeProvider";
import { pxToNumber } from "@utils/convertions";
import { useCollapsed } from "./hooks/useCollapse";
import { useCollapseAnimation } from "./hooks/useCollapseAnimation";

import { type TypographyProps } from "@atoms/Typography";
import { useCollapseIconAnimation } from "./hooks/useCollapseIconAnimation";
import Animated from "react-native-reanimated";

type CollapseProps = {
  style?: StyleProp<ViewStyle>;
  label: string;
  labelProps?: Omit<TypographyProps, "children" | "style">;
  children?: React.ReactNode;
};

const Collapse = (props: CollapseProps) => {
  const { theme } = useTheme();
  const [collapsed, toggleCollapse] = useCollapsed();
  const [collapseAnimation, toggleCollapseAnimation] = useCollapseAnimation();
  const [collapseIconAnimation, toggleCollapseIconAnimation] = useCollapseIconAnimation();

  const iconSize = (() => {
    const sizeType = props.labelProps?.size ?? "medium";
    return pxToNumber(theme.fontSize[sizeType]);
  })();

  const iconColor = (() => {
    const colorType = props.labelProps?.color ?? "font";
    return theme.colors[colorType];
  })();

  const handleToggleCollapse = () => {
    const animationDuration = 150;

    toggleCollapse(animationDuration);
    toggleCollapseAnimation(animationDuration);
    toggleCollapseIconAnimation(animationDuration);
  };

  return (
    <View style={props.style}>
      <CollapseTitleContainer onPress={handleToggleCollapse}>
        <CollpaseLabel {...props.labelProps}>{props.label}</CollpaseLabel>

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
