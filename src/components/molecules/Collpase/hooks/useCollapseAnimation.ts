import { useCallback } from "react";
import { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";

type CollapseAnimation = {
  transform: {
    scaleY: number;
  }[];
  opacity: number;
};

const useCollapseAnimation = (): [CollapseAnimation, (duration: number) => void] => {
  const scaleY = useSharedValue(0);
  const opacity = useSharedValue(0);

  const scaleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: scaleY.value }],
    };
  }, []);

  const opacityAnimation = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, []);

  const toggleAnimation = useCallback((duration: number) => {
    scaleY.value = withTiming(scaleY.value === 0 ? 1 : 0, {
      duration: duration,
      easing: Easing.ease,
    });
    opacity.value = withTiming(opacity.value === 0 ? 1 : 0, {
      duration: duration,
      easing: Easing.ease,
    });
  }, []);

  return [Object.assign(scaleAnimation, opacityAnimation), toggleAnimation];
};

export { useCollapseAnimation };
