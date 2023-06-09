module.exports = {
  env: {
    'browser': true,
    'es6': true
  },
  extends: [
    'plugin:react/recommended'
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  plugins: [
    'unused-imports',
    'react'
  ],
  rules: {
    'comma-dangle': ['warn', 'never'],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-unused-vars': ['warn', { 'ignoreRestSiblings': true }],
    'object-curly-spacing': ['warn', 'always', { 'objectsInObjects': true }],
    'quotes': ['warn', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': false }],
    'react/display-name': 'off',
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-key': 'off',
    'react/jsx-max-props-per-line': ['warn', { 'maximum': 1, 'when': 'always' }],
    'react/jsx-one-expression-per-line': ['warn', { 'allow': 'single-child' }],
    'react/jsx-sort-props': ['warn'],
    'react/jsx-uses-react': 'off',
    'react/no-deprecated': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
    'react/no-unstable-nested-components': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'semi': ['warn', 'never', { 'beforeStatementContinuationChars': 'always' }],
    'sort-keys': 'warn',
    'unused-imports/no-unused-imports': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    plugins: ['@typescript-eslint', 'solid'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:solid/typescript'],
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'ignoreRestSiblings': true }],
      'no-debugger': 'off'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: ['./tsconfig.json']
    }
  }]
}
