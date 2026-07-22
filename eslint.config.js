import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'build', 'coverage', 'node_modules', '.yarn', '.pnp.*', 'public'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      prettier: eslintPluginPrettier,
    },

    rules: {
      // -----------------------------
      // React
      // -----------------------------
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off',

      'react/jsx-uses-react': 'off',

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      // -----------------------------
      // Prettier
      // -----------------------------
      'prettier/prettier': 'error',

      // -----------------------------
      // Unused Imports
      // -----------------------------
      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // -----------------------------
      // Import Sorting
      // -----------------------------
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // -----------------------------
      // Best Practices
      // -----------------------------
      eqeqeq: ['error', 'always'],

      curly: ['error', 'all'],

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-debugger': 'error',

      'no-var': 'error',

      'prefer-const': 'error',

      'object-shorthand': 'error',

      'prefer-template': 'error',

      'no-duplicate-imports': 'error',

      'no-unreachable': 'error',

      'no-trailing-spaces': 'error',

      'eol-last': ['error', 'always'],

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],
    },
  },

  eslintConfigPrettier,
);
