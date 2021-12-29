import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { useEffect } from "react";
import {
  FoodQuery,
  FoodQueryVariables,
} from "./__generated__/FoodQuery.graphql";
import { FoodQuery as FoodQueryDocument } from "./FoodQuery";

export const useFood = (v: FoodQueryVariables) => {
  const [queryReference, loadQuery] = useQueryLoader<FoodQuery>(
    FoodQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, []);

  const refetch = () => loadQuery(v, { fetchPolicy: "network-only" });

  return { queryReference, refetch };
};

export interface FoodPreloadedHookProps {
  foodQueryReference: PreloadedQuery<FoodQuery, Record<string, unknown>>;
}

export const useFoodPreloadedQuery = (
  queryReference: PreloadedQuery<FoodQuery, Record<string, unknown>>
) => {
  return usePreloadedQuery<FoodQuery>(FoodQueryDocument, queryReference);
};
