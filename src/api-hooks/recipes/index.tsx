import { useCallback, useEffect } from "react";
import {
  fetchQuery,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import {
  RecipesQuery,
  RecipesQuery$variables,
} from "./__generated__/RecipesQuery.graphql";
import { RecipesQuery as RecipeQueryDocument } from "./RecipesQuery";

export * from "./__generated__/RecipesQuery.graphql";

export const useRecipes = (v: RecipesQuery$variables) => {
  const [queryReference, loadQuery] =
    useQueryLoader<RecipesQuery>(RecipeQueryDocument);

  useEffect(() => {
    loadQuery(v);
  }, []);

  const refetch = () => loadQuery(v, { fetchPolicy: "network-only" });

  return { queryReference, refetch };
};

export interface RecipesPreloadedHookProps {
  recipesQR: PreloadedQuery<RecipesQuery, Record<string, unknown>>;
}

export const useRecipesPreloaded = (
  queryReference: PreloadedQuery<RecipesQuery, Record<string, unknown>>
) => {
  const [, loadQuery] = useQueryLoader<RecipesQuery>(RecipeQueryDocument);

  const data = usePreloadedQuery<RecipesQuery>(
    RecipeQueryDocument,
    queryReference
  );

  const refetch = useCallback(
    (variables?: RecipesQuery$variables | undefined) => {
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

  return { data, refetch };
};
