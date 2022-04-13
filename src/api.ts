import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";

const GQL_HTTPS_ENDPOINT = import.meta.env.VITE_GQL_HTTPS_ENDPOINT || "";

const fetchQuery: FetchFunction = (
  operation,
  variables,
  cacheConfig,
  uploadables
) => {
  return fetch(GQL_HTTPS_ENDPOINT, {
    method: "POST",
    headers: {
      // Add authentication and other headers here
      "content-type": "application/json",
      "x-hasura-admin-secret": import.meta.env.VITE_HASURA_ADMIN_SECRET,
    } as any,
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
};

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

export const environment = new Environment({
  network,
  store,
});
