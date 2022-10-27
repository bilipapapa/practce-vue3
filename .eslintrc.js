module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
      },
    ],
    'vue/multi-word-component-names': 'off',
    // 禁止使用分号
    semi: ['error', 'never'],
    // 使用单引号
    quotes: 0,
    // quotes: ['error', 'single'],
    // 末尾逗号
    'comma-dangle': ['error', 'only-multiline'],
    // 对象中打印空格
    'object-curly-spacing': ['error', 'always'],
    // 箭头函数参数括号
    'arrow-parens': ['error', 'as-needed'],
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
