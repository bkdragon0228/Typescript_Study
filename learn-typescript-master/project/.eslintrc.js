module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        'prettier/prettier': [
            'warn',
            { singleQuote: true, endOfLine: 'auto', tabWidth: 4 },
            'error',
            {
                singleQuote: true,
                semi: true,
                useTabs: false,
                tabWidth: 2,
                printWidth: 80,
                bracketSpacing: true,
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'prefer-const': 'off',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
};
