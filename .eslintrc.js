// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
  plugins: ['solid', 'jsx-a11y'],
  extends: ['eslint:recommended', 'plugin:solid/recommended','plugin:jsx-a11y/recommended'],
};
