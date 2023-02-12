import { Gesture, type ComposedGesture } from "react-native-gesture-handler";
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type ZoomAnimation = {
  transform: [{ translateX: number }, { translateY: number }, { scale: number }];
};

type ZoomAnimationController = {
  gesture: ComposedGesture;
  animation: ZoomAnimation;
};

type UseAnimationProps = {
  width: number;
  height: number;
};

const useZoomAnimation = (props: UseAnimationProps): ZoomAnimationController => {
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const pinchGestureHandler = Gesture.Pinch()
    .onChange((event) => {
      const diff = event.scaleChange - 1;
      const sum = scale.value + diff;

      scale.value = sum > 5 ? 5 : sum;
    })
    .onFinalize((event) => {
      const duration = 250;
      if (event.scale < 1) {
        scale.value = withTiming(1, { easing: Easing.ease, duration });
        translateX.value = 0;
        translateY.value = 0;
      }
    });

  const panGestureHandler = Gesture.Pan().onChange((event): void => {
    if (scale.value <= 1) return;

    const scaleDiff = scale.value - 1;
    const maxX = (scaleDiff * props.width) / 2;
    const maxY = (scaleDiff * props.height) / 2;

    const resultX = translateX.value + event.changeX;
    const resultY = translateY.value + event.changeY;

    if (Math.abs(resultX) < maxX) {
      translateX.value = resultX;
    }
    if (Math.abs(resultY) < maxY) {
      translateY.value = resultY;
    }
  });

  const pinchAnimation = useAnimatedStyle((): ZoomAnimation => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  return {
    gesture: Gesture.Simultaneous(pinchGestureHandler, panGestureHandler),
    animation: pinchAnimation,
  };
};

export { useZoomAnimation, type ZoomAnimationController, type ZoomAnimation };
