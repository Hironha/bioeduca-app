import { ScrollView } from "react-native";
import { Loading } from "@atoms/Loading";
import { ScreenLayout } from "@atoms/ScreenLayout";
import { Empty } from "@molecules/Empty";
import { PlantCard } from "@molecules/PlantCard";

import { useConsultPlant } from "@services/hooks/plant/useConsultPlant";

import { type PlantsStackParamsList } from "@navigations/PlantsStack";
import { type BottomTabsParamsList } from "@navigations/BottomNavigation";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

type ConsultPlantScreenProps = NativeStackScreenProps<
  PlantsStackParamsList & BottomTabsParamsList,
  "ConsultPlantScreen"
>;

const ConsultPlantScreen = ({ route, navigation }: ConsultPlantScreenProps) => {
  const consultPlantResult = useConsultPlant({
    plantId: route.params.plantId,
    options: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 60 * 60 * 1000,
      staleTime: Infinity,
    },
  });

  if (consultPlantResult.isLoading) {
    return (
      <ScreenLayout>
        <Loading />
      </ScreenLayout>
    );
  }

  if (consultPlantResult.isError || consultPlantResult.data === undefined) {
    return (
      <ScreenLayout>
        <Empty text={`Não foi possível encontra a planta ${route.params.plantPopularName}`} />
      </ScreenLayout>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <ScreenLayout>
        <PlantCard plant={consultPlantResult.data} />
      </ScreenLayout>
    </ScrollView>
  );
};

export { ConsultPlantScreen, ConsultPlantScreenProps };
