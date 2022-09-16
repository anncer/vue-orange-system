module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "prettier", "vue"],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/multi-word-component-names": "off",
    camelcase: 2, // 强制驼峰法命名
    "prefer-const": 1, // 首选const
    "vars-on-top": 1, //var必须放在作用域顶部
    "use-isnan": 1, // 禁止比较时使用NaN，只能用isNaN()
    "no-constant-condition": 1, //禁止在条件中使用常量表达式
    "no-continue": 0, //禁止使用continue
    "no-dupe-keys": 1, //在创建对象字面量时不允许键重复
    "no-floating-decimal": 2, //禁止省略浮点数中的0 .5 3.
    "no-implicit-coercion": 1, //禁止隐式转换
    "no-iterator": 2, //禁止使用__iterator__ 属性
    "no-nested-ternary": 1, //禁止使用嵌套的三目运算
    "no-param-reassign": 2, //禁止给参数重新赋值
    "no-return-assign": 1, //return 语句中不能有赋值表达式
    "no-script-url": 1, //禁止使用javascript:void(0)
    "no-useless-call": 2, //禁止不必要的call和apply
    "no-var": 1, //禁用var，用let和const代替
    "no-self-compare": 2 //不能比较自身
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        mocha: true
      }
    }
  ]
};
