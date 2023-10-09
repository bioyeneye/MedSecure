/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "sznm/react",
    "plugin:react/jsx-runtime",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "import", "prettier"],
  ignorePatterns: ["node_modules/"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
  },
};
