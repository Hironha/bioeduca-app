import { useCallback } from "react";
import { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";

type OpacityAnimation = {
  opacity: number;
};

type MaxHeightAnimation = {
  maxHeight: number;
};

type CollapseAnimation = [MaxHeightAnimation, OpacityAnimation];

const useCollapseAnimation = (): [CollapseAnimation, (duration: number) => void] => {
  const opacity = useSharedValue(0);
  const maxHeight = useSharedValue(0);

  const maxHeightAnimation = useAnimatedStyle(() => {
    return {
      maxHeight: maxHeight.value,
    };
  }, []);

  const opacityAnimation = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, []);

  const toggleAnimation = useCallback((duration: number) => {
    maxHeight.value = withTiming(maxHeight.value === 0 ? 1000 : 0, {
      duration: duration,
      easing: Easing.ease,
    });

    opacity.value = withTiming(opacity.value === 0 ? 1 : 0, {
      duration: duration,
      easing: Easing.ease,
    });
  }, []);

  return [[maxHeightAnimation, opacityAnimation], toggleAnimation];
};

export { useCollapseAnimation };
