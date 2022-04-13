module.exports = (api) => {
  const isTest = api.env("test");

  return {
    plugins: [
      "relay",
      "macros",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
    ],
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

  };
};
