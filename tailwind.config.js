/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
              fontSize: '2.25em',
              lineHeight: '1.2',
            },
            h2: {
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.75em',
              fontSize: '1.875em',
              lineHeight: '1.3',
              color: '#1f2937',
              letterSpacing: '-0.025em',
            },
            h3: {
              fontWeight: '600',
              marginTop: '1.25em',
              marginBottom: '0.5em',
              fontSize: '1.5em',
              lineHeight: '1.4',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ol > li': {
              paddingLeft: '1.5em',
            },
            blockquote: {
              borderLeftColor: '#e5e7eb',
              fontStyle: 'italic',
              color: '#6b7280',
            },
            code: {
              color: '#1f2937',
              backgroundColor: '#f3f4f6',
              borderRadius: '0.25rem',
              padding: '0.2em 0.4em',
              fontSize: '0.875em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            pre: {
              backgroundColor: '#f3f4f6',
              padding: '1em',
              borderRadius: '0.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 