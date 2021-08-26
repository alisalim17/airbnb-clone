module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "linebreak-style": "off",
    semi: "off",
    "import/prefer-default-export": 0,
    quotes: 0,
    "object-curly-newline": "off",
    "class-methods-use-this": "off",
    "no-console": "off",
    "spaced-comment": "off",
    "arrow-body-style": 0,
    "no-explicit-any": "off",
  },
};
