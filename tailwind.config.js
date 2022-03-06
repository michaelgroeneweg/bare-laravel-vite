const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'black': '#1a1a1a',
                'white': '#ffffff',
                'divider-light': '#FF3C3C',
                'divider-dark': '#545454',
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
