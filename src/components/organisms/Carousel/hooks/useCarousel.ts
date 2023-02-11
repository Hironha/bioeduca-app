import { useState, useRef, useCallback } from "react";
import { type NativeScrollEvent, type NativeSyntheticEvent } from "react-native";

type CarouselController = {
  page: number;
  swipe(event: NativeSyntheticEvent<NativeScrollEvent>): void;
};

export const useCarousel = (): CarouselController => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const swipe = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  return { page: index, swipe };
};
