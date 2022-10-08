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
  FoodBrandQuery,
  FoodBrandQuery$variables,
} from "./__generated__/FoodBrandQuery.graphql";
import { AddFoodBrandMutation } from "./__generated__/AddFoodBrandMutation.graphql";
import { FoodBrandQuery as FoodBrandQueryDocument } from "./FoodBrandQuery";
import { AddFoodBrandMutation as AddFoodBrandMutationDocument } from "./AddFoodBrandMutation";
import { UpdateFoodBrandMutation as UpdateFoodBrandMutationDocument } from "./UpdateFoodBrandMutation";
import { DeleteFoodBrandMutation as DeleteFoodBrandMutationDocument } from "./DeleteFoodBrandMutation";
import { UpdateFoodBrandMutation } from "./__generated__/UpdateFoodBrandMutation.graphql";
import { DeleteFoodBrandMutation } from "./__generated__/DeleteFoodBrandMutation.graphql";

export * from "./__generated__/FoodBrandQuery.graphql";
export * from "./__generated__/AddFoodBrandMutation.graphql";
export * from "./__generated__/UpdateFoodBrandMutation.graphql";
export * from "./__generated__/DeleteFoodBrandMutation.graphql";

export const useAddFoodBrandMutation = () =>
  useMutation<AddFoodBrandMutation>(AddFoodBrandMutationDocument);
export const useUpdateFoodBrandMutation = () =>
  useMutation<UpdateFoodBrandMutation>(UpdateFoodBrandMutationDocument);
export const useDeleteFoodBrandMutation = () =>
  useMutation<DeleteFoodBrandMutation>(DeleteFoodBrandMutationDocument);

export const useFoodBrand = (v: FoodBrandQuery$variables) => {
  const environment = useRelayEnvironment();
  const [queryReference, loadQuery] = useQueryLoader<FoodBrandQuery>(
    FoodBrandQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, []);

  const refetch = useCallback(
    (variables: FoodBrandQuery$variables | undefined) => {
      fetchQuery(environment, FoodBrandQueryDocument, {
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

export interface FoodBrandPreloadedHookProps {
  foodBrandQR: PreloadedQuery<FoodBrandQuery, Record<string, unknown>>;
}

export const useFoodBrandPreloadedQuery = (
  queryReference: PreloadedQuery<FoodBrandQuery, Record<string, unknown>>
) => {
  const [addMutation] = useAddFoodBrandMutation();
  const [updateMutation] = useUpdateFoodBrandMutation();
  const [deleteMutation] = useDeleteFoodBrandMutation();

  const [_, loadQuery] = useQueryLoader<FoodBrandQuery>(FoodBrandQueryDocument);

  const data = usePreloadedQuery<FoodBrandQuery>(
    FoodBrandQueryDocument,
    queryReference
  );

  const refetch = useCallback(
    (variables?: FoodBrandQuery$variables) => {
      fetchQuery(queryReference.environment, FoodBrandQueryDocument, {
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

  const add = (config: UseMutationConfig<AddFoodBrandMutation>) =>
    addMutation({
      ...config,
      onCompleted: (r, p) => {
        refetch();
        config.onCompleted?.(r, p);
      },
    });
  const update = (config: UseMutationConfig<UpdateFoodBrandMutation>) =>
    updateMutation(config);
  const destroy = (config: UseMutationConfig<DeleteFoodBrandMutation>) =>
    deleteMutation(config);

  return { data, refetch, mutations: { add, update, destroy } };
};
