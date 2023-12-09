module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  plugins: ['cypress', 'chai-friendly'],
  extends: [
    'standard-with-typescript',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-var': 'error',
    // Rules set by ahsan which are meant to be like this until changed by ahsan due to some reason in future
    'no-console': 'error',
    'no-debugger': 'error',
    'no-new': 'error', // need this like this otherwise we can not use "new" keyword in our project, ahsan need to check this further to confirm.
    'no-tabs': 'error',
    '@typescript-eslint/semi': 'off', // ahsan setup prettier like this so we need this thing off
    '@typescript-eslint/indent': 'error',
    'no-unused-expressions': 'error',
    'chai-friendly/no-unused-expressions': 'error',
  },
  ignorePatterns: ['src/graphql/**/*', 'node_modules'],
};
