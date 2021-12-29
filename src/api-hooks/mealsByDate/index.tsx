import { useCallback, useEffect } from "react";
import {
  fetchQuery,
  PreloadedQuery,
  useMutation,
  UseMutationConfig,
  usePreloadedQuery,
  useQueryLoader,
  useRelayEnvironment,
} from "react-relay";
import {
  MealsByDateQuery,
  MealsByDateQueryVariables,
} from "./__generated__/MealsByDateQuery.graphql";
import { AddMealMutation } from "./__generated__/AddMealMutation.graphql";
import { AddMealMutation as AddMealMutationDocument } from "./AddMealMutation";
import { DeleteMealMutation as DeleteMealMutationDocument } from "./DeleteMealMutation";
import { MealsByDateQuery as MealsByDateQueryDocument } from "./MealsByDateQuery";
import { DeleteMealMutation } from "./__generated__/DeleteMealMutation.graphql";

export * from "./__generated__/MealsByDateQuery.graphql";
export * from "./__generated__/AddMealMutation.graphql";
export * from "./__generated__/DeleteMealMutation.graphql";

export const useAddMealMutation = () => {
  return useMutation<AddMealMutation>(AddMealMutationDocument);
};

export const useDeleteMealMutation = () => {
  return useMutation<DeleteMealMutation>(DeleteMealMutationDocument);
};

export const useMealsByDateQuery = (v: MealsByDateQueryVariables) => {
  const environment = useRelayEnvironment();
  const [queryReference, loadQuery] = useQueryLoader<MealsByDateQuery>(
    MealsByDateQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, [v.date, v.u_id]);

  const refetch = useCallback(() => {
    fetchQuery(environment, MealsByDateQueryDocument, v).subscribe({
      complete: () => {
        loadQuery(v, { fetchPolicy: "store-or-network" });
      },
      error: () => {
        //TODO
      },
    });
  }, [v, environment]);

  return { queryReference, refetch };
};

export interface MealsByDatePreloadedHookProps {
  queryReference: PreloadedQuery<MealsByDateQuery, Record<string, unknown>>;
}

export const useMealsPreloadedQuery = (
  queryReference: PreloadedQuery<MealsByDateQuery, Record<string, unknown>>
) => {
  const [commitMutation] = useAddMealMutation();
  const [deleteMutation] = useDeleteMealMutation();
  const [_, loadQuery] = useQueryLoader<MealsByDateQuery>(
    MealsByDateQueryDocument
  );
  const data = usePreloadedQuery<MealsByDateQuery>(
    MealsByDateQueryDocument,
    queryReference
  );

  const refetch = useCallback(() => {
    fetchQuery(
      queryReference.environment,
      MealsByDateQueryDocument,
      queryReference.variables
    ).subscribe({
      complete: () => {
        loadQuery(queryReference.variables, {
          fetchPolicy: "store-or-network",
        });
      },
      error: () => {
        //TODO
      },
    });
  }, [queryReference.variables, queryReference.environment]);

  const add = (config: UseMutationConfig<AddMealMutation>) =>
    commitMutation({
      ...config,
      onCompleted: (r, p) => {
        refetch();
        config.onCompleted?.(r, p);
      },
    });

  const destroy = (config: UseMutationConfig<DeleteMealMutation>) =>
    deleteMutation(config);

  return { data, refetch, mutations: { add, destroy } };
};
