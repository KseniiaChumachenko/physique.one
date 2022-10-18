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
import { commitLocalUpdate } from "relay-runtime";
import { AddRecipeMutation as AddRecipeMutationDocument } from "../recipe/AddRecipeMutation";
import { UpdateRecipeMutation as UpdateRecipeMutationDocument } from "../recipe/UpdateRecipeMutation";
import { DeleteRecipeMutation as DeleteRecipeMutationDocument } from "../recipe/DeleteRecipeMutation";
import { useActiveUser } from "../authorization";
import { RecipeQuery as RecipeQueryDocument } from "./RecipeQuery";
import {
  RecipeQuery,
  RecipeQuery$variables,
} from "./__generated__/RecipeQuery.graphql";
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

export const useRecipe = (v: RecipeQuery$variables) => {
  const [queryReference, loadQuery] =
    useQueryLoader<RecipeQuery>(RecipeQueryDocument);

  useEffect(() => {
    if (v.id) {
      loadQuery(v);
    }
  }, []);

  const refetch = () => loadQuery(v, { fetchPolicy: "network-only" });

  return { queryReference, loadQuery, refetch };
};

export interface RecipePreloadedHookProps {
  recipeQR: PreloadedQuery<RecipeQuery, Record<string, unknown>>;
}

export const useRecipePreloaded = (
  queryReference: PreloadedQuery<RecipeQuery, Record<string, unknown>>
) => {
  const environment = useRelayEnvironment();
  const { user } = useActiveUser();

  const [addMutation] = useAddRecipeMutation();
  const [updateMutation] = useUpdateRecipeMutation();
  const [deleteMutation] = useDeleteRecipeMutation();

  const [, loadQuery] = useQueryLoader<RecipeQuery>(RecipeQueryDocument);

  const data = usePreloadedQuery<RecipeQuery>(
    RecipeQueryDocument,
    queryReference
  );

  const setOwner = () => {
    commitLocalUpdate(environment as any, (store) => {
      data.recipe_connection.edges.map((i) => {
        const recipe = store.get(i?.node?.id);
        recipe?.setValue(user?.id === i?.node?.u_id, "isOwner");

        i.node.recipe_items.map((i) => {
          const recipeItem = store.get(i.id);
          recipeItem?.setValue(user?.id === i?.u_id, "isOwner");
        });
      });
    });
  };

  useEffect(setOwner, [data.recipe_connection.edges.length, queryReference]);

  const refetch = useCallback(
    (variables?: RecipeQuery$variables | undefined) => {
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
      onError: (error) => alert(error.message),
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
