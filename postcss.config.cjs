module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-import": {},
        "postcss-focus-visible": {
            replaceWith: "[data-focus-visible-added]",
        },
    },
};
