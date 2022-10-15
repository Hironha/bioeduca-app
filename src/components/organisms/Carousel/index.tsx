import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  Dimensions,
  type ImageStyle,
  type StyleProp,
  type FlatListProps,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type ListRenderItem,
} from "react-native";

import { Slide } from "./Slide";

const { width: windowWidth } = Dimensions.get("window");

type CarouselProps<T extends { imageURI: string }> = Pick<
  FlatListProps<T>,
  "data" | "style" | "keyExtractor"
> & {
  height: number;
  width: number;
  imageStyles?: StyleProp<ImageStyle>;
};

const Carousel = <T extends { imageURI: string }>(props: CarouselProps<T>) => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps: Partial<FlatListProps<T>> = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: props.keyExtractor,
    getItemLayout: useCallback(
      (_: any, index: number) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const renderItem: ListRenderItem<T> = ({ item }) => {
    return (
      <Slide
        width={props.width}
        height={props.height}
        imageStyle={props.imageStyles}
        imageURI={item.imageURI}
      />
    );
  };

  return (
    <FlatList
      data={props.data}
      style={[{ width: props.width, height: props.height }, props.style]}
      renderItem={renderItem}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      onScroll={onScroll}
      {...flatListOptimizationProps}
    />
  );
};

export { Carousel, CarouselProps };
