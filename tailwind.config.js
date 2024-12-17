const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--very-dark-grayish-blue))",
                secondary: "hsl(var(--grayish-blue))",
                neutral: "hsl(var(--desaturated-dark-blue))",
                background: {
                    DEFAULT: "hsl(var(--light-grayish-blue))",
                },
            },
        },
    },
    plugins: [],
};
