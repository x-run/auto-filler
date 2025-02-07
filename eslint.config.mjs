import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
    {languageOptions: { globals: globals.browser }},
    //カスタムルールを指定
    {
        rules: {
            "no-unused-vars": ["error"], // 未使用の変数をエラーとして検出
            eqeqeq: ["error", "always"], // 厳密な等価演算子を強制
            "no-console": ["warn"], // console.log の使用を警告
            indent: ["error", 4], // インデントを4スペースで強制
        }
    }
];