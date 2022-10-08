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
  MealsByDateQuery$variables,
} from "./__generated__/MealsByDateQuery.graphql";
import { AddMealMutation } from "./__generated__/AddMealMutation.graphql";
import { UpdateMealMutation } from "./__generated__/UpdateMealMutation.graphql";
import { DeleteMealMutation } from "./__generated__/DeleteMealMutation.graphql";
import { MealsByDateQuery as MealsByDateQueryDocument } from "./MealsByDateQuery";
import { AddMealMutation as AddMealMutationDocument } from "./AddMealMutation";
import { UpdateMealMutation as UpdateMealMutationDocument } from "./UpdateMealMutation";
import { DeleteMealMutation as DeleteMealMutationDocument } from "./DeleteMealMutation";

export * from "./__generated__/MealsByDateQuery.graphql";
export * from "./__generated__/AddMealMutation.graphql";
export * from "./__generated__/UpdateMealMutation.graphql";
export * from "./__generated__/DeleteMealMutation.graphql";

export const useAddMealMutation = () => {
  return useMutation<AddMealMutation>(AddMealMutationDocument);
};

export const useUpdateMealMutation = () => {
  return useMutation<UpdateMealMutation>(UpdateMealMutationDocument);
};

export const useDeleteMealMutation = () => {
  return useMutation<DeleteMealMutation>(DeleteMealMutationDocument);
};

export const useMealsByDateQuery = (v: MealsByDateQuery$variables) => {
  const environment = useRelayEnvironment();
  const [queryReference, loadQuery] = useQueryLoader<MealsByDateQuery>(
    MealsByDateQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, [v.date, v.u_id]);

  const refetch = useCallback(
    (variables: MealsByDateQuery$variables | undefined) => {
      fetchQuery(environment, MealsByDateQueryDocument, {
        ...v,
        ...variables,
      }).subscribe({
        complete: () => {
          loadQuery(
            { ...v, ...variables },
            { fetchPolicy: "store-or-network" }
          );
        },
        error: () => {
          //TODO
        },
      });
    },
    [v, environment]
  );

  return { queryReference, refetch };
};

export interface MealsByDatePreloadedHookProps {
  mealsQR: PreloadedQuery<MealsByDateQuery, Record<string, unknown>>;
}

export const useMealsPreloadedQuery = (
  queryReference: PreloadedQuery<MealsByDateQuery, Record<string, unknown>>
) => {
  const [addMutation] = useAddMealMutation();
  const [updateMutation] = useUpdateMealMutation();
  const [deleteMutation] = useDeleteMealMutation();

  const [_, loadQuery] = useQueryLoader<MealsByDateQuery>(
    MealsByDateQueryDocument
  );
  const data = usePreloadedQuery<MealsByDateQuery>(
    MealsByDateQueryDocument,
    queryReference
  );

  const refetch = useCallback(
    (v?: MealsByDateQuery$variables) => {
      fetchQuery(queryReference.environment, MealsByDateQueryDocument, {
        ...queryReference.variables,
        ...v,
      }).subscribe({
        complete: () => {
          loadQuery(
            { ...queryReference.variables, ...v },
            {
              fetchPolicy: "store-or-network",
            }
          );
        },
        error: () => {
          //TODO
        },
      });
    },
    [queryReference.variables, queryReference.environment]
  );

  const add = (config: UseMutationConfig<AddMealMutation>) =>
    addMutation({
      ...config,
      onCompleted: (r, p) => {
        refetch();
        config.onCompleted?.(r, p);
      },
    });

  const update = (config: UseMutationConfig<UpdateMealMutation>) =>
    updateMutation(config);

  const destroy = (config: UseMutationConfig<DeleteMealMutation>) =>
    deleteMutation(config);

  return { data, refetch, mutations: { add, update, destroy } };
};
