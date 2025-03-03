import globals from "globals";
import pluginJs from "@eslint/js";
import css from "@eslint/css";
import json from "@eslint/json";
import markdown from "@eslint/markdown";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // lint css files
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
    rules: {
      "css/no-duplicate-imports": "error",
    },
  },
  // lint json files
  {
    files: ["**/*.json"],
    plugins: {
      json,
    },
    language: "json/json",
    rules: {
      "json/no-duplicate-keys": "error",
    },
  },
  // lint markdown files
  {
    files: ["**/*.md"],
    plugins: {
      markdown,
    },
    language: "markdown/commonmark",
    rules: {
      "markdown/no-html": "error",
    },
  },
  // lint js files
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: { globals: globals.browser },
    rules: { "no-irregular-whitespace": "off" },
  },
  pluginJs.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs"],
    ...pluginJs.configs.recommended,
    rules: { "no-irregular-whitespace": "off" },
  },
];
