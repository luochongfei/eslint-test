module.exports = {
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
    ],
    plugins: ['vue'],
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ],
    rules: {
        semi: 'error',
        'no-undef': 'error',
        indent: ['error', 4],
        'no-console': 'off',
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1
        }],
    },
};
