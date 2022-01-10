module.exports = {
  parser: "@typescript-eslint/parser",
  extends: "react-app",
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: false,
        types: {
          Function:
            "`Function` types are unsafe. Use more specific function types instead. e.g. (arg: number) => string",
          String: {
            message:
              "The `String` type refers to the String object which is probably not what you want, you probably want `string` instead which refers to the string primitive type.",
            fixWith: "string",
          },
        },
      },
    ],
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "array-callback-return": "error",
    eqeqeq: "error",
    "jsx-a11y/anchor-is-valid": "off",
    "import/no-anonymous-default-export": "off",
    "import/no-default-export": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
      },
    ],
    "no-restricted-imports": ["error"],
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  overrides: [
    {
      files: ["src/**/*"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
