import { useMemo, useEffect } from "react";
import { ActivityIndicator, Alert } from "react-native";

import { ListPlantsPreview } from "@organisms/ListPlantsPreview";
import { ScreenLayout } from "@atoms/ScreenLayout";

import { useTheme } from "@providers/ThemeProvider";
import { useListPaginatedPlantsPreview } from "@services/hooks/plant/useListPaginatesPlantsPreview";

import { type PlantsStackParamsList } from "@navigations/PlantsStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type ListPlantsScreenProps = NativeStackScreenProps<PlantsStackParamsList & BottomTabsParamsList>;

const ListPlantsScreen = ({ route, navigation }: ListPlantsScreenProps) => {
  const { theme } = useTheme();

  const listPaginatedPlantsPreviewResult = useListPaginatedPlantsPreview({
    retry: false,
    refetchOnWindowFocus: false,
    cacheTime: 60 * 60 * 1000,
    staleTime: Infinity,
    meta: { perPage: 10 },
  });

  const plantsPreview = useMemo(() => {
    return listPaginatedPlantsPreviewResult.data?.pages?.map((response) => response.data).flat();
  }, [listPaginatedPlantsPreviewResult.data?.pages]);

  const navigateToPlantScreen = (plantId: string, popularName: string) => {
    navigation.navigate("ConsultPlantScreen", { plantId, plantPopularName: popularName });
  };

  useEffect(() => {
    if (listPaginatedPlantsPreviewResult.isError) {
      Alert.alert("Erro");
    }
  }, [listPaginatedPlantsPreviewResult.isError]);

  return (
    <ScreenLayout>
      {listPaginatedPlantsPreviewResult.isLoading ? (
        <ActivityIndicator color={theme.colors.primary} />
      ) : (
        <ListPlantsPreview
          data={plantsPreview}
          onItemPress={(item) => navigateToPlantScreen(item.id, item.popular_name)}
          onEndReached={() => listPaginatedPlantsPreviewResult.fetchNextPage()}
        />
      )}
    </ScreenLayout>
  );
};

export { ListPlantsScreen, ListPlantsScreenProps };
