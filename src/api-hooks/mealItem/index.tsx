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
  MealItemQuery,
  MealItemQuery$variables,
} from "./__generated__/MealItemQuery.graphql";
import { AddMealItemMutation } from "./__generated__/AddMealItemMutation.graphql";
import { UpdateMealItemMutation } from "./__generated__/UpdateMealItemMutation.graphql";
import { DeleteMealItemMutation } from "./__generated__/DeleteMealItemMutation.graphql";
import { MealItemQuery as MealItemQueryDocument } from "./MealItemQuery";
import { AddMealItemMutation as AddMealItemMutationDocument } from "./AddMealItemMutation";
import { UpdateMealItemMutation as UpdateMealItemMutationDocument } from "./UpdateMealItemMutation";
import { DeleteMealItemMutation as DeleteMealItemMutationDocument } from "./DeleteMealItemMutation";

export * from "./__generated__/MealItemQuery.graphql";
export * from "./__generated__/AddMealItemMutation.graphql";
export * from "./__generated__/UpdateMealItemMutation.graphql";
export * from "./__generated__/DeleteMealItemMutation.graphql";

export const useAddMealItemMutation = () =>
  useMutation<AddMealItemMutation>(AddMealItemMutationDocument);
export const useUpdateMealItemMutation = () =>
  useMutation<UpdateMealItemMutation>(UpdateMealItemMutationDocument);
export const useDeleteMealItemMutation = () =>
  useMutation<DeleteMealItemMutation>(DeleteMealItemMutationDocument);

export const useMealItemQuery = (v: MealItemQuery$variables) => {
  const environment = useRelayEnvironment();
  const [queryReference, loadQuery] = useQueryLoader<MealItemQuery>(
    MealItemQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, [v]);

  const refetch = useCallback(
    (variables: MealItemQuery$variables | undefined) => {
      fetchQuery(environment, MealItemQueryDocument, {
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

export const useMealItemPreloadedQuery = (
  queryReference: PreloadedQuery<MealItemQuery, Record<string, unknown>>
) => {
  const [addMutation] = useAddMealItemMutation();
  const [updateMutation] = useUpdateMealItemMutation();
  const [deleteMutation] = useDeleteMealItemMutation();

  const [_, loadQuery] = useQueryLoader<MealItemQuery>(MealItemQueryDocument);

  const data = usePreloadedQuery<MealItemQuery>(
    MealItemQueryDocument,
    queryReference
  );

  const refetch = useCallback(
    (variables?: MealItemQuery$variables | undefined) => {
      fetchQuery(queryReference.environment, MealItemQueryDocument, {
        ...queryReference.variables,
        ...variables,
      }).subscribe({
        complete: () => {
          loadQuery(
            { ...queryReference.variables, ...variables },
            { fetchPolicy: "store-or-network" }
          );
        },
        error: () => {
          //TODO
        },
      });
    },
    [queryReference.variables, queryReference.environment]
  );

  const add = (config: UseMutationConfig<AddMealItemMutation>) =>
    addMutation({
      ...config,
      onCompleted: (r, p) => {
        refetch();
        config.onCompleted?.(r, p);
      },
    });

  const update = (config: UseMutationConfig<UpdateMealItemMutation>) =>
    updateMutation(config);

  const destroy = (config: UseMutationConfig<DeleteMealItemMutation>) =>
    deleteMutation(config);

  return { data, refetch, mutations: { add, update, destroy } };
};
