module.exports = {
    "extends": "standard",
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ["error", "always"],
        'space-before-function-paren': ["error", "never"],
        'quotes': ["error", "double"]
    }
};