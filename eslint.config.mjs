import { defineConfig } from "eslint/config";
import nextPlugin from "eslint-config-next";

const eslintConfig = defineConfig([
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  },
  ...nextPlugin,
]);

export default eslintConfig;
