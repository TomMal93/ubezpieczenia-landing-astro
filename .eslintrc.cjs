/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2023: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint", "astro", "svelte"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:svelte/recommended",
    "prettier"
  ],
  settings: {
    "svelte3/typescript": true
  },
  overrides: [
    {
      files: ["**/*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      rules: {}
    },
    {
      files: ["**/*.svelte"],
      processor: "svelte/processor"
    }
  ],
  ignorePatterns: ["dist/", ".vercel/", "_pagefind/"]
};
