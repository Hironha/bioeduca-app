import {
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
  type QueryFunctionContext,
  type UseInfiniteQueryResult,
} from "@tanstack/react-query";

import { api } from "@services/api";
import { PlantQueryKeys } from "./keys";

import { type IPlantPreview } from "@interfaces/models/plant";

type Response = {
  hasMore: boolean;
  lastKey?: string;
  data: IPlantPreview[];
};

type Params = {
  lastKey?: string;
  perPage: number;
};

type ListPaginatedPlantsPreviewProps = QueryFunctionContext<[PlantQueryKeys], Params>;

type Props = Omit<
  UseInfiniteQueryOptions<Response, unknown, Response, Response, [PlantQueryKeys]>,
  "queryKey" | "queryFn" | "getNextPageParam" | "meta"
> & {
  meta?: { perPage: number; limit?: number };
};

const listPaginatedPlantsPreview = async ({
  signal,
  pageParam,
  meta,
}: ListPaginatedPlantsPreviewProps): Promise<Response> => {
  const params = {
    ...pageParam,
    perPage: pageParam?.perPage || meta?.perPage,
  };

  const result = await api.get<Response>("/plants/preview", {
    params: params,
    signal,
  });

  return result.data;
};

const createParams = (perPage?: number, lastKey?: string): Params => {
  return {
    perPage: perPage ?? 10,
    lastKey,
  };
};

const QUERY_KEY: [PlantQueryKeys] = [PlantQueryKeys.LIST_PAGINATED_PREVIEW];

export const useListPaginatedPlantsPreview = (
  props?: Props
): UseInfiniteQueryResult<Response, unknown> => {
  const handleGetNextPageParam = (lastPage: Response): Params | undefined => {
    const params = createParams(props?.meta?.perPage, lastPage.lastKey);
    return lastPage.hasMore ? params : undefined;
  };

  return useInfiniteQuery(QUERY_KEY, listPaginatedPlantsPreview, {
    ...props,
    getNextPageParam: handleGetNextPageParam,
  });
};
