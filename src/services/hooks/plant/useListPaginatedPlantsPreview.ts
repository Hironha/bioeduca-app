import {
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
  type QueryFunctionContext,
  type UseInfiniteQueryResult,
} from "@tanstack/react-query";

import { api } from "@services/api";
import { PlantQueryKeys } from "./keys";

import { type IPlantPreview } from "@interfaces/models/plant";

type ListPaginatedPlantsPreviewResponse = {
  hasMore: boolean;
  lastKey?: string;
  data: IPlantPreview[];
};

type ListPaginatedPlantsPreviewParams = {
  lastKey?: string;
  perPage: number;
};

type ListPaginatedPlantsPreviewProps = QueryFunctionContext<
  [PlantQueryKeys],
  ListPaginatedPlantsPreviewParams
>;

type UseListPaginatedPlantsPreviewProps = Omit<
  UseInfiniteQueryOptions<
    ListPaginatedPlantsPreviewResponse,
    unknown,
    ListPaginatedPlantsPreviewResponse,
    ListPaginatedPlantsPreviewResponse,
    [PlantQueryKeys]
  >,
  "queryKey" | "queryFn" | "getNextPageParam" | "meta"
> & {
  meta?: { perPage: number; limit?: number };
};

const listPaginatedPlantsPreview = async ({
  signal,
  pageParam,
  meta,
}: ListPaginatedPlantsPreviewProps): Promise<ListPaginatedPlantsPreviewResponse> => {
  const params = {
    ...pageParam,
    perPage: pageParam?.perPage || meta?.perPage,
  };

  const result = await api.get<ListPaginatedPlantsPreviewResponse>("/plants/preview", {
    params: params,
    signal,
  });

  return result.data;
};

export const useListPaginatedPlantsPreview = (
  props?: UseListPaginatedPlantsPreviewProps
): UseInfiniteQueryResult<ListPaginatedPlantsPreviewResponse, unknown> => {
  const queryKey = [PlantQueryKeys.LIST_PAGINATED_PREVIEW] as [PlantQueryKeys];

  const createParams = (perPage?: number, lastKey?: string): ListPaginatedPlantsPreviewParams => {
    return {
      perPage: perPage || 10,
      lastKey,
    };
  };

  const handleGetNextPageParam = (
    lastPage: ListPaginatedPlantsPreviewResponse
  ): ListPaginatedPlantsPreviewParams | undefined => {
    const params = createParams(props?.meta?.perPage, lastPage.lastKey);
    return lastPage.hasMore ? params : undefined;
  };

  return useInfiniteQuery(queryKey, listPaginatedPlantsPreview, {
    ...props,
    getNextPageParam: handleGetNextPageParam,
  });
};
