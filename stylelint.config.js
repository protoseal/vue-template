/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-idiomatic-order",
  ],
  plugins: ["stylelint-order"],
  customSyntax: "postcss-html",
  overrides: [{ files: ["**/*.scss"], customSyntax: "postcss-scss" }],
  rules: { "at-rule-no-deprecated": [true, { ignoreAtRules: ["apply"] }] },
}
