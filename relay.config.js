module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./src",
  schema: "./src/graphql/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  customScalars: {
    uuid: "string",
    int8: "string",
    bigint: "string",
    numeric: "number",
    varbit: "string",
    bit: "string",
    char: "string",
    varchar: "string",
    bool: "boolean",
    int: "number",
    int4: "number",
    float8: "number",
    timestamptz: "string",
    timetz: "string",
    jsonb: "Record<string, unknown>",
    _text: "string",
    text: "string",
    date: "string",
  },
};
