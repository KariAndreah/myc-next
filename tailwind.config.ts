/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
     './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        backgroundImage: {
          // "nyc-skyline": "url('public/images/opaque.jpg')",
          'nyc-bridge':
            "url('../public/images/patrick-tomasso-SVVTZtTGyaU-unsplash.jpg')",
          'nyc-williamsburg': "url('../public/images/toms-rits.jpg')",
          'nyc-bridge2': "url('../public/images/juan-di.jpg')",
        },
      },
    },
    plugins: [],
  };
