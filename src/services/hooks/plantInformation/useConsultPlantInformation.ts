import { api } from "@services/api";
import {
  useQuery,
  type UseQueryOptions,
  type QueryFunctionContext,
  type UseQueryResult,
} from "@tanstack/react-query";

import { PlantInformationQueryKeys } from "./keys";

import { type IPlantInformation } from "@interfaces/models/plantInformation";

type ConsultPlantInformationQueryKey = [PlantInformationQueryKeys, string];

type UseConsultPlantInformationProps = {
  plantInformationId: string;
  options?: Omit<
    UseQueryOptions<IPlantInformation, unknown, IPlantInformation, ConsultPlantInformationQueryKey>,
    "queryKey" | "queryFn" | "initialData"
  > & {
    initialData?: () => undefined;
  };
};

const consultPlantInformation = async ({
  queryKey,
  signal,
}: QueryFunctionContext<ConsultPlantInformationQueryKey>): Promise<IPlantInformation> => {
  const plantInformationId = queryKey[1];
  const response = await api.get<IPlantInformation>(`/plant-informations/${plantInformationId}`, {
    signal,
  });
  return response.data;
};

export const useConsultPlantInformation = ({
  plantInformationId,
  options,
}: UseConsultPlantInformationProps): UseQueryResult<IPlantInformation, unknown> => {
  const queryKey: ConsultPlantInformationQueryKey = [
    PlantInformationQueryKeys.CONSULT,
    plantInformationId,
  ];
  return useQuery(queryKey, consultPlantInformation, options);
};
