import Animated, { type AnimateProps } from "react-native-reanimated";

import { Empty } from "@molecules/Empty";
import { PlantPreviewCard } from "@molecules/PlantPreviewCard";
import { ListItemSeparator } from "./styles";

import { type FlatListProps } from "react-native";
import { type IPlantPreview } from "@interfaces/models/plant";

type ListPlantsPreviewProps = AnimateProps<
  Omit<
    FlatListProps<IPlantPreview>,
    "ItemSeparatorComponent" | "renderItem" | "ListEmptyComponent" | "keyExtractor"
  >
> & {
  onItemPress?: (plantPreview: IPlantPreview) => void;
};

const ListPlantsPreview = (props: ListPlantsPreviewProps) => {
  const { horizontal = false, onItemPress, ...flatListProps } = props;

  const handleItemPress = (plantPreview: IPlantPreview) => {
    if (onItemPress) {
      onItemPress(plantPreview);
    }
  };

  return (
    <Animated.FlatList
      {...flatListProps}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingVertical: 12 }}
      ListEmptyComponent={<Empty text="Não há plantas para listar" />}
      renderItem={({ item }) => (
        <PlantPreviewCard
          onPress={() => handleItemPress(item)}
          imageURI={item.images[0]}
          scientificName={item.scientific_name}
          popularName={item.popular_name}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
};

export { ListPlantsPreview, ListPlantsPreviewProps };
