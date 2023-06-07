import { useCallback, useRef } from "react";
import Animated, { FadeIn, type AnimateProps } from "react-native-reanimated";

import { Empty } from "@molecules/Empty";
import { PlantPreviewCard } from "@molecules/PlantPreviewCard";
import { ListItemSeparator } from "./styles";

import { type FlatListProps, type ListRenderItem } from "react-native";
import { type IPlantPreview } from "@interfaces/models/plant";

type ItemPressHandler = (plantPreview: IPlantPreview) => void;

type ListPlantsPreviewProps = AnimateProps<
  Omit<
    FlatListProps<IPlantPreview>,
    "ItemSeparatorComponent" | "renderItem" | "ListEmptyComponent" | "keyExtractor"
  >
> & {
  onItemPress?: ItemPressHandler;
};

const createItemPressHandler = (handler?: ItemPressHandler): ItemPressHandler => {
  return (plantPreview) => {
    if (handler) {
      handler(plantPreview);
    }
  };
};

const ListPlantsPreview = (props: ListPlantsPreviewProps) => {
  const { horizontal = false, onItemPress, ...flatListProps } = props;
  const handleItemPressRef = useRef(createItemPressHandler(onItemPress));
  handleItemPressRef.current = createItemPressHandler(onItemPress);

  const renderPlantPreview: ListRenderItem<IPlantPreview> = useCallback((info) => {
    const fadeDuration = 300;
    const delay = (fadeDuration * info.index) / 3;
    return (
      <Animated.View entering={FadeIn.duration(fadeDuration).delay(delay)}>
        <PlantPreviewCard
          onPress={() => handleItemPressRef.current(info.item)}
          imageURI={info.item.images[0]}
          scientificName={info.item.scientific_name}
          popularName={info.item.popular_name}
        />
      </Animated.View>
    );
  }, []);

  return (
    <Animated.FlatList
      {...flatListProps}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingVertical: 12 }}
      ListEmptyComponent={<Empty text="Não há plantas para listar" />}
      renderItem={renderPlantPreview}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
};

export { ListPlantsPreview, ListPlantsPreviewProps };
