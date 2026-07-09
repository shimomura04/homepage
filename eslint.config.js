import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    extends: [js.configs.recommended, eslintConfigPrettier],
    rules: {
      'no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
    },
  },
]);
