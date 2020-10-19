module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue', 'pug'],
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    semi: [2, 'never'],
    'no-empty-pattern': 'off',
    'vue/max-attributes-per-line': 'warn',
    'vue/component-name-in-template-casing': 'warn',
    'no-unused-vars': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extend-native': 'off',
    'import/order': ['off'],
    'prefer-template': ['error'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
