/*
 * @Author: PT
 * @Date: 2020-04-07 15:19:16
 * @LastEditors: PT
 * @LastEditTime: 2020-04-07 15:19:38
 * @Description: eslint
 */
module.exports = {
  env: {
    browser: false,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  "ignorePatterns": ["dist/", "node_modules/", "vendor/"],
  rules: {
    "parser": "babel-eslint"
  }
}
