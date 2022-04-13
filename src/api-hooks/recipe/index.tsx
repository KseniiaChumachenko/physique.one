import { useCallback, useEffect } from "react";
import {
  fetchQuery,
  PreloadedQuery,
  useMutation,
  UseMutationConfig,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import {
  RecipeQuery,
  RecipeQueryVariables,
} from "./__generated__/RecipeQuery.graphql";
import { RecipeQuery as RecipeQueryDocument } from "./RecipeQuery";
import { AddRecipeMutation as AddRecipeMutationDocument } from "./AddRecipeMutation";
import { UpdateRecipeMutation as UpdateRecipeMutationDocument } from "./UpdateRecipeMutation";
import { DeleteRecipeMutation as DeleteRecipeMutationDocument } from "./DeleteRecipeMutation";
import { AddRecipeMutation } from "./__generated__/AddRecipeMutation.graphql";
import { UpdateRecipeMutation } from "./__generated__/UpdateRecipeMutation.graphql";
import { DeleteRecipeMutation } from "./__generated__/DeleteRecipeMutation.graphql";

export * from "./__generated__/RecipeQuery.graphql";
export * from "./__generated__/AddRecipeMutation.graphql";
export * from "./__generated__/UpdateRecipeMutation.graphql";
export * from "./__generated__/DeleteRecipeMutation.graphql";

export const useAddRecipeMutation = () =>
  useMutation<AddRecipeMutation>(AddRecipeMutationDocument);
export const useUpdateRecipeMutation = () =>
  useMutation<UpdateRecipeMutation>(UpdateRecipeMutationDocument);
export const useDeleteRecipeMutation = () =>
  useMutation<DeleteRecipeMutation>(DeleteRecipeMutationDocument);

export const useRecipe = (v: RecipeQueryVariables) => {
  const [queryReference, loadQuery] = useQueryLoader<RecipeQuery>(
    RecipeQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, []);

  const refetch = () => loadQuery(v, { fetchPolicy: "network-only" });

  return { queryReference, refetch };
};

export interface RecipePreloadedHookProps {
  recipeQR: PreloadedQuery<RecipeQuery, Record<string, unknown>>;
}

export const useRecipePreloaded = (
  queryReference: PreloadedQuery<RecipeQuery, Record<string, unknown>>
) => {
  const [addMutation] = useAddRecipeMutation();
  const [updateMutation] = useUpdateRecipeMutation();
  const [deleteMutation] = useDeleteRecipeMutation();

  const [_, loadQuery] = useQueryLoader<RecipeQuery>(RecipeQueryDocument);

  const data = usePreloadedQuery<RecipeQuery>(
    RecipeQueryDocument,
    queryReference
  );

  const refetch = useCallback(
    (variables?: RecipeQueryVariables | undefined) => {
      fetchQuery(queryReference.environment, RecipeQueryDocument, {
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

  const add = (config: UseMutationConfig<AddRecipeMutation>) =>
    addMutation({
      ...config,
      onCompleted: (r, p) => {
        refetch();
        config.onCompleted?.(r, p);
      },
    });

  const update = (config: UseMutationConfig<UpdateRecipeMutation>) =>
    updateMutation(config);

  const destroy = (config: UseMutationConfig<DeleteRecipeMutation>) =>
    deleteMutation(config);

  return { data, refetch, mutations: { add, update, destroy } };
};