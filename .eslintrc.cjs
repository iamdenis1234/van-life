module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "@tanstack/query"],
  rules: {
    "react-refresh/only-export-components": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": ["error", { skipUndeclared: true }],
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    // DisplayName allows you to name your component. This name is used by React in debugging messages.
    "react/display-name": ["off", { ignoreTranspilerName: false }],
    "react-hooks/exhaustive-deps": "error",
  },
};
