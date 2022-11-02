/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {},
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            'light',
            'luxury',
            {
                light: {
                    ...require('daisyui/src/colors/themes')['[data-theme=light]'],
                    primary: '#880808',
                },
            },
            {
                luxury: {
                    ...require('daisyui/src/colors/themes')['[data-theme=luxury]'],
                    primary: '#880808',
                    'primary-content': '#ffffff',
                },
            },
        ],
    },
};
