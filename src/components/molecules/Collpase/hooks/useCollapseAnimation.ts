import { useCallback } from "react";
import { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";

type OpacityAnimation = {
  opacity: number;
};

type CollapseAnimation = [OpacityAnimation];

const useCollapseAnimation = (): [CollapseAnimation, (duration: number) => void] => {
  const opacity = useSharedValue(0);

  const opacityAnimation = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, []);

  const toggleAnimation = useCallback((duration: number) => {
    opacity.value = withTiming(opacity.value === 0 ? 1 : 0, {
      duration: duration,
      easing: Easing.ease,
    });
  }, []);

  return [[opacityAnimation], toggleAnimation];
};

export { useCollapseAnimation };
