module.exports = {
    env: {
        node: true,
        jquery: true,
        es6: true
    },
    // parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    rules: {
        semi: 'error',
        'no-undef': 'error',
    }
};