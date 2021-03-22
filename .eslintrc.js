module.exports = {
    // 使用环境
    env: {
        // browser: true,
    },

    // 继承规则
    extends: [
        // 爱彼迎团队 EsLint 规范
        'airbnb-base',
        'plugin:vue/recommended',
    ],

    // 解析配置
    parserOptions: {
        // ES 2021 的规则
        ecmaVersion: 12,
        // js模块类型
        sourceType: 'module',
    },

    // 自定义规则
    rules: {
        // 缩进 4 个空格
        indent: ['error', 4],

        // 关闭 禁止alert
        'no-alert': 0,

        // 关闭 禁止console
        'no-console': 0,

        // vue相关
        'vue/html-self-closing': 0,

        'vue/html-indent': ['error', 4],
        // 'vue/script-indent': ['error', 4, {
        //     baseIndent: 4,
        // }],
    },
};
