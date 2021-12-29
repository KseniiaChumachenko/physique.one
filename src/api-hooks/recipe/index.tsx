import { useEffect } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import {
  RecipeQuery,
  RecipeQueryVariables,
} from "./__generated__/RecipeQuery.graphql";
import { RecipeQuery as RecipeQueryDocument } from "./RecipeQuery";

export const useRecipes = (v: RecipeQueryVariables) => {
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
  recipeQueryReference: PreloadedQuery<RecipeQuery, Record<string, unknown>>;
}

export const useRecipePreloaded = (
  queryReference: PreloadedQuery<RecipeQuery, Record<string, unknown>>
) => {
  return usePreloadedQuery<RecipeQuery>(RecipeQueryDocument, queryReference);
};
