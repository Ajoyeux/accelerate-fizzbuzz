import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
    { ignores: ['node_modules/', 'coverage/', 'dist/', 'eslint.config.js', 'vitest.config.ts'] },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    eslintPluginPrettier,
);
