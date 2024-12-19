import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      screens: {
        desktop: '393px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#00ff85',
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
