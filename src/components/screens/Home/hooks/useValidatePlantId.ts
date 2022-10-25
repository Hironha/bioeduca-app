import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useConsultPlant } from "@services/hooks/plant/useConsultPlant";

type UseValidatePlantIdProps = {
  plantId: string;
};

const useValidatePlantId = (props?: UseValidatePlantIdProps) => {
  const [plantId, setPlantId] = useState<string | undefined>(props?.plantId);

  const { data, isLoading, isError, refetch, fetchStatus } = useConsultPlant({
    plantId: plantId ?? "",
    options: {
      retry: false,
      refetchOnMount: false,
      cacheTime: 60 * 60 * 1000,
      staleTime: Infinity,
      enabled: false,
    },
  });

  const validate = useCallback((plantId: string) => {
    setPlantId(plantId);
  }, []);

  useFocusEffect(
    useCallback(() => {
      setPlantId(undefined);
    }, [])
  );

  useEffect(() => {
    if (plantId) {
      refetch();
    }
  }, [plantId]);

  return {
    validate,
    isValid: Boolean(data) && !isError,
    isLoading: isLoading && fetchStatus !== "idle",
    plant: data,
  };
};

export { useValidatePlantId, UseValidatePlantIdProps };
