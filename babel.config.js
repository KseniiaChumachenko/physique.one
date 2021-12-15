module.exports = (api) => {
  const isTest = api.env("test");

  return {
    presets: [
      [
        "@babel/env",
        {
          modules: isTest ? "commonjs" : false,
        },
      ],
      ["@babel/react"],
      ["@lingui/babel-preset-react"],
      ["@babel/typescript"],
    ],
    plugins: [
      ["relay", { artifactDirectory: "./src/graphql/__generated__" }],
      "macros",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
    ],
  };
};
