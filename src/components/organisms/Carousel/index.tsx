import { useCallback } from "react";
import {
  View,
  FlatList,
  type ImageStyle,
  type StyleProp,
  type FlatListProps,
  type ListRenderItem,
} from "react-native";

import { Slide } from "./Slide";
import { Pagination } from "./Pagination";
import { useCarousel } from "./hooks/useCarousel";

type BaseItem = {
  imageURI: string;
};

type CarouselProps<T extends BaseItem> = Pick<
  FlatListProps<T>,
  "data" | "style" | "keyExtractor"
> & {
  height: number;
  width: number;
  imageStyles?: StyleProp<ImageStyle>;
  onItemPress?: (item: T) => void;
};

const Carousel = <T extends BaseItem>(
  props: CarouselProps<T>
): React.ReactElement<CarouselProps<T>> => {
  const { page, swipe } = useCarousel();

  const getItemLayout = useCallback(
    (_: any, index: number) => {
      return {
        index,
        length: props.width,
        offset: index * props.width,
      };
    },
    [props.width]
  );

  const flatListOptimizationProps: Partial<FlatListProps<T>> = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: props.keyExtractor,
    getItemLayout: getItemLayout,
  };

  const renderItem: ListRenderItem<T> = ({ item }) => {
    const handleItemPress = () => {
      if (props.onItemPress) props.onItemPress(item);
    };
    return (
      <Slide
        onPress={handleItemPress}
        width={props.width}
        height={props.height}
        imageStyle={props.imageStyles}
        imageURI={item.imageURI}
      />
    );
  };

  return (
    <View style={props.style}>
      <FlatList
        data={props.data}
        style={[{ width: props.width, height: props.height }]}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={swipe}
        {...flatListOptimizationProps}
      />
      {props.data && (
        <Pagination style={{ marginTop: 12 }} pages={props.data.length} currentPage={page} />
      )}
    </View>
  );
};

export { Carousel, type CarouselProps, type BaseItem };
