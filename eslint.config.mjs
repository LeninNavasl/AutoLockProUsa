import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['dist/', '.astro/', 'node_modules/', 'stitch_autolock_pro_usa_website/']
  },
  {
    files: ['**/*.astro'],
    rules: {
      // Disallow unsafe inline scripts for strict CSP
      'astro/no-unsafe-inline-scripts': 'error',
      'astro/prefer-class-list-directive': 'warn'
    }
  },
  {
    files: ['**/*.ts', '**/*.js', '**/*.mjs'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  }
];
