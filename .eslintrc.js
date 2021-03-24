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
    rules: {
        semi: 'error',
        // 'no-undef': 'error',
        indent: ['error', 4],
        'no-console': 'off',
    },
};
