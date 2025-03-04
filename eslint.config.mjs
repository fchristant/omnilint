import globals from "globals";
import pluginJs from "@eslint/js";
import css from "@eslint/css";
import json from "@eslint/json";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // lint CSS files
  {
    files: ["**/*.css"],
    language: "css/css",
    ...css.configs.recommended,
  },
  // lint JSON files
  {
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    language: "json/json",
    ...json.configs.recommended,
  },
  // lint js files
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: { globals: globals.browser },
    ...pluginJs.configs.recommended,
    rules: {
      ...pluginJs.configs.recommended.rules,
      "no-irregular-whitespace": "off",
    },
  },
];
