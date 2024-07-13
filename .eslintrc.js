module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: ['./tsconfig.json'],
    },
    extends: [
      'next',
      'next/core-web-vitals',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:react/jsx-runtime',
      'plugin:prettier/recommended',
    ],
    plugins: [
      'import',
      'prettier',
      'jsx-a11y',
      '@typescript-eslint',
      'react',
      'react-hooks',
    ],
    ignorePatterns: [
      '*/node_modules/',
      '*.svg',
      '*.csv',
      '*.png',
      '*.css',
      'src/gql',
      'playwright.config.js',
      'babel.config.js',
      '*.js',
    ],
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'import/prefer-default-export': 'off',
      curly: ['error', 'all'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'func-names': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            ['internal', 'unknown'],
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            { pattern: '^@/assets', group: 'parent', position: 'before' },
            { pattern: '^@/constants', group: 'parent', position: 'before' },
            {
              pattern: '^@/components/atoms',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '^@/components/molecules',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '^@/components/organisms',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '^@/components/templates',
              group: 'parent',
              position: 'before',
            },
            { pattern: '^@/app', group: 'parent', position: 'before' },
            { pattern: '^@/hooks', group: 'parent', position: 'before' },
            { pattern: '^@/services', group: 'parent', position: 'before' },
            { pattern: '^@/store', group: 'parent', position: 'before' },
            { pattern: '^@/helpers', group: 'parent', position: 'before' },
            { pattern: '^@/types', group: 'parent', position: 'before' },
            { pattern: '^./*', group: 'index', position: 'after' },
          ],
          'newlines-between': 'always-and-inside-groups',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/newline-after-import': 'off',
      'import/no-default-export': 'off',
      'import/no-anonymous-default-export': 'error',
      'consistent-return': 'off',
      'default-case': 'off',
      semi: 'error',
      'semi-style': ['error', 'last'],
  
      '@typescript-eslint/semi': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': ['off'],
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
          leadingUnderscore: 'allow',
        },
      ],
  
      'class-methods-use-this': 'off',
      'react/display-name': 'off',
      'react/destructuring-assignment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/alt-text': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
        },
      ],
      '@next/next/no-img-element': 'off',
      'import/no-named-as-default': 0,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
          moduleDirectory: ['node_modules', 'src/'],
        },
        typescript: {
          project: './tsconfig.json',
        },
      },
      typescript: {},
    },
  };
  