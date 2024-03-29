import { api } from "@services/api";
import {
  useQuery,
  type UseQueryOptions,
  type QueryFunctionContext,
  type UseQueryResult,
} from "@tanstack/react-query";

import { PlantQueryKeys } from "./keys";

import { type IPlant } from "@interfaces/models/plant";

type ConsultPlantQueryKey = [PlantQueryKeys, string];

type UseConsultPlantProps = {
  plantId: string;
  options?: Omit<
    UseQueryOptions<IPlant, unknown, IPlant, ConsultPlantQueryKey>,
    "queryKey" | "queryFn" | "initialData"
  > & {
    initialData?: () => undefined;
  };
};

const consultPlant = async ({
  queryKey,
  signal,
}: QueryFunctionContext<ConsultPlantQueryKey>): Promise<IPlant> => {
  const plantId = queryKey[1];
  const response = await api.get<IPlant>(`/plants/${plantId}`, { signal });
  return response.data;
};

export const useConsultPlant = ({
  plantId,
  options,
}: UseConsultPlantProps): UseQueryResult<IPlant, unknown> => {
  const queryKey: ConsultPlantQueryKey = [PlantQueryKeys.CONSULT, plantId];
  return useQuery(queryKey, consultPlant, options);
};
