import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{html,ts,tsx,js,jsx}', // Adjust paths based on your project structure
    ],    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
            },
            "animation": {
              "background-shine": "background-shine 2s linear infinite"
            },
            "keyframes": {
              "background-shine": {
                "from": {
                  "backgroundPosition": "0 0"
                },
                "to": {
                  "backgroundPosition": "-200% 0"
                }
              }
            }
        },
    },
    plugins: [],
};

export default config;