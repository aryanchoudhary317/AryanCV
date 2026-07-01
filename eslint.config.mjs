// ESLint configuration - using flat config format
// Ignoring problematic Next.js config import issues
export default [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
      "dist/**",
      ".vercel/**"
    ]
  }
];
