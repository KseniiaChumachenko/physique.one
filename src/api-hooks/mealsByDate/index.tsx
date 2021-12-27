import { useEffect } from "react";
import {
  PreloadedQuery,
  useMutation,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import {
  MealsByDateQuery,
  MealsByDateQueryVariables,
} from "./__generated__/MealsByDateQuery.graphql";
import { AddMealMutation } from "./__generated__/AddMealMutation.graphql";
import { AddMealMutation as AddMealMutationDocument } from "./AddMealMutation";
import { MealsByDateQuery as MealsByDateQueryDocument } from "./MealsByDateQuery";

export * from "./__generated__/MealsByDateQuery.graphql";
export * from "./__generated__/AddMealMutation.graphql";

export const useMealsByDateQuery = (v: MealsByDateQueryVariables) => {
  const [queryReference, loadQuery] = useQueryLoader<MealsByDateQuery>(
    MealsByDateQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, [v.date, v.u_id]);

  const refetch = () => loadQuery(v, { fetchPolicy: "network-only" });

  return { queryReference, refetch };
};

export interface MealsByDatePreloadedHookProps {
  queryReference: PreloadedQuery<MealsByDateQuery, Record<string, unknown>>;
}

export const useMealsPreloadedQuery = (
  queryReference: PreloadedQuery<MealsByDateQuery, Record<string, unknown>>
) => {
  return usePreloadedQuery<MealsByDateQuery>(
    MealsByDateQueryDocument,
    queryReference
  );
};

export const useAddMealMutation = () => {
  return useMutation<AddMealMutation>(AddMealMutationDocument);
};
