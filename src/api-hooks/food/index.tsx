import {
  fetchQuery,
  PreloadedQuery,
  useMutation,
  UseMutationConfig,
  usePreloadedQuery,
  useQueryLoader,
  useRelayEnvironment,
} from "react-relay";
import { useCallback, useEffect } from "react";
import {
  FoodQuery,
  FoodQueryVariables,
} from "./__generated__/FoodQuery.graphql";
import { AddFoodMutation } from "./__generated__/AddFoodMutation.graphql";
import { UpdateFoodMutation } from "./__generated__/UpdateFoodMutation.graphql";
import { DeleteFoodMutation } from "./__generated__/DeleteFoodMutation.graphql";
import { FoodQuery as FoodQueryDocument } from "./FoodQuery";
import { AddFoodMutation as AddFoodMutationDocument } from "./AddFoodMutation";
import { UpdateFoodMutation as UpdateFoodMutationDocument } from "./UpdateFoodMutation";
import { DeleteFoodMutation as DeleteFoodMutationDocument } from "./DeleteFoodMutation";

export * from "./__generated__/FoodQuery.graphql";
export * from "./__generated__/AddFoodMutation.graphql";
export * from "./__generated__/UpdateFoodMutation.graphql";
export * from "./__generated__/DeleteFoodMutation.graphql";

export const useAddFoodMutation = () =>
  useMutation<AddFoodMutation>(AddFoodMutationDocument);
export const useUpdateFoodMutation = () =>
  useMutation<UpdateFoodMutation>(UpdateFoodMutationDocument);
export const useDeleteFoodMutation = () =>
  useMutation<DeleteFoodMutation>(DeleteFoodMutationDocument);

export const useFood = (v: FoodQueryVariables) => {
  const environment = useRelayEnvironment();
  const [queryReference, loadQuery] = useQueryLoader<FoodQuery>(
    FoodQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, []);

  const refetch = useCallback(
    (variables: FoodQueryVariables | undefined) => {
      fetchQuery(environment, FoodQueryDocument, {
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

export interface FoodPreloadedHookProps {
  foodQR: PreloadedQuery<FoodQuery, Record<string, unknown>>;
}

export const useFoodPreloadedQuery = (
  queryReference: PreloadedQuery<FoodQuery, Record<string, unknown>>
) => {
  const [addMutation] = useAddFoodMutation();
  const [updateMutation] = useUpdateFoodMutation();
  const [deleteMutation] = useDeleteFoodMutation();

  const [_, loadQuery] = useQueryLoader<FoodQuery>(FoodQueryDocument);

  const data = usePreloadedQuery<FoodQuery>(FoodQueryDocument, queryReference);

  const refetch = useCallback(
    (variables?: FoodQueryVariables | undefined) => {
      fetchQuery(queryReference.environment, FoodQueryDocument, {
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

  const add = (config: UseMutationConfig<AddFoodMutation>) =>
    addMutation({
      ...config,
      onCompleted: (r, p) => {
        refetch();
        config.onCompleted?.(r, p);
      },
    });
  const update = (config: UseMutationConfig<UpdateFoodMutation>) =>
    updateMutation(config);
  const destroy = (config: UseMutationConfig<DeleteFoodMutation>) =>
    deleteMutation({
      ...config,
      onCompleted: (r, p) => {
        refetch();
        config.onCompleted?.(r, p);
      },
    });

  return { data, refetch, mutations: { add, update, destroy } };
};
