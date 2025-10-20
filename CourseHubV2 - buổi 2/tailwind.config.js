/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./App.tsx"],
  presets: [require("nativewind/preset")],
  darkMode: 'class', // Bật dark mode với class
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          background: '#FFFFFF',
          surface: '#F5F5F5',
          card: '#FFFFFF',
          text: '#000000',
          textSecondary: '#6B7280',
          border: '#E5E7EB',
        },
        // Dark theme colors
        dark: {
          background: '#000000',
          surface: '#1C1C1E',
          card: '#1C1C1E',
          text: '#FFFFFF',
          textSecondary: '#9CA3AF',
          border: '#38383A',
        },
        // Semantic colors (tự động thay đổi theo theme)
        primary: {
          light: '#007AFF',
          dark: '#0A84FF',
          DEFAULT: '#007AFF',
        },
        secondary: {
          light: '#5856D6',
          dark: '#5E5CE6',
          DEFAULT: '#5856D6',
        },
      },
    },
  },
  plugins: [],
}