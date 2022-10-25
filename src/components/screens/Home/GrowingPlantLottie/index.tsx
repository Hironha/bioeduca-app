import { useCallback, useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { useFocusEffect } from "@react-navigation/native";

const GrowingPlantLottie = () => {
  const lottieRef = useRef<LottieView | null>(null);
  const isPlayingAnimation = useRef(false);

  const playLottieAnimation = useCallback(() => {
    isPlayingAnimation.current = true;
    lottieRef.current?.play();
  }, []);

  useFocusEffect(playLottieAnimation);

  useEffect(() => {
    if (!isPlayingAnimation.current) {
      playLottieAnimation();
    }
  }, [playLottieAnimation]);

  return (
    <LottieView
      ref={lottieRef}
      source={require("@assets/growing-plant-lottie.json")}
      onAnimationFinish={() => {
        isPlayingAnimation.current = false;
      }}
      loop={false}
      style={{ flex: 1 }}
    />
  );
};

export { GrowingPlantLottie };
