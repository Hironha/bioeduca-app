import { api } from "@services/api";
import { useQuery, type UseQueryOptions, type QueryFunctionContext } from "@tanstack/react-query";

import { PlantInformationQueryKeys } from "./keys";

import { type IPlantInformation } from "@interfaces/models/plantInformation";

type ListPlantInformationsQueryKey = [PlantInformationQueryKeys];

type UseConsultPlantInformationProps = Omit<
  UseQueryOptions<IPlantInformation[], unknown, IPlantInformation[], ListPlantInformationsQueryKey>,
  "queryKey" | "queryFn" | "initialData"
> & {
  initialData?: () => undefined;
};

const listPlantInformations = async ({
  signal,
}: QueryFunctionContext<ListPlantInformationsQueryKey>) => {
  const response = await api.get<{ data: IPlantInformation[] }>("/plant-informations", {
    signal,
  });

  return response.data.data;
};

export const useListPlantInformations = (options: UseConsultPlantInformationProps) => {
  const queryKey: ListPlantInformationsQueryKey = [PlantInformationQueryKeys.LIST];
  return useQuery(queryKey, listPlantInformations, options);
};
