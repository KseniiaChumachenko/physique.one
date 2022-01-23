import { useCallback, useEffect } from "react";
import {
  fetchQuery,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
  useRelayEnvironment,
} from "react-relay";
import {
  FoodTypeQuery,
  FoodTypeQueryVariables,
} from "./__generated__/FoodTypeQuery.graphql";
import { FoodTypeQuery as FoodTypeQueryDocument } from "./FoodTypeQuery";

export * from "./__generated__/FoodTypeQuery.graphql";

export const useFoodType = (v: FoodTypeQueryVariables) => {
  const environment = useRelayEnvironment();
  const [queryReference, loadQuery] = useQueryLoader<FoodTypeQuery>(
    FoodTypeQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, []);

  const refetch = useCallback(
    (variables: FoodTypeQueryVariables | undefined) => {
      fetchQuery(environment, FoodTypeQueryDocument, {
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

export interface FoodTypePreloadedHookProps {
  foodTypeQR: PreloadedQuery<FoodTypeQuery, Record<string, unknown>>;
}

export const useFoodTypePreloadedQuery = (
  queryReference: PreloadedQuery<FoodTypeQuery, Record<string, unknown>>
) => {
  const [_, loadQuery] = useQueryLoader<FoodTypeQuery>(FoodTypeQueryDocument);

  const data = usePreloadedQuery<FoodTypeQuery>(
    FoodTypeQueryDocument,
    queryReference
  );

  const refetch = useCallback(
    (variables?: FoodTypeQueryVariables) => {
      fetchQuery(queryReference.environment, FoodTypeQueryDocument, {
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

  return { data, refetch, mutations: {} };
};
