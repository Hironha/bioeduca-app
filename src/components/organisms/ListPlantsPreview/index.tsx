import Animated, { type AnimateProps } from "react-native-reanimated";

import { ListEmpty } from "@molecules/ListEmpty";
import { PlantPreviewCard } from "@molecules/PlantPreviewCard";
import { ListItemSeparator } from "./styles";

import { type FlatListProps } from "react-native";
import { type IPlantPreview } from "@interfaces/models/plant";

type ListPlantsPreviewProps = AnimateProps<
  Omit<
    FlatListProps<IPlantPreview>,
    "ItemSeparatorComponent" | "renderItem" | "ListEmptyComponent" | "keyExtractor"
  >
>;

const ListPlantsPreview = (props: ListPlantsPreviewProps) => {
  const { horizontal = false, ...flatListProps } = props;

  return (
    <Animated.FlatList
      {...flatListProps}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingVertical: 12 }}
      ListEmptyComponent={<ListEmpty text="Não foi possível encontrar nenhuma planta" />}
      renderItem={({ item }) => (
        <PlantPreviewCard
          onPress={() => console.log(item.id)}
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
