import { useCallback } from "react";
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type CollapseIconAnimation = {
  transform: {
    rotateZ: string;
  }[];
};

const useCollapseIconAnimation = (): [CollapseIconAnimation, (duration: number) => void] => {
  const rotation = useSharedValue("0deg");

  const rotationAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: rotation.value }],
    };
  }, []);

  const toggleAnimation = useCallback((duration: number) => {
    rotation.value = withTiming(rotation.value === "0deg" ? "180deg" : "0deg", {
      duration,
      easing: Easing.ease,
    });
  }, []);

  return [rotationAnimation, toggleAnimation];
};

export { useCollapseIconAnimation }
