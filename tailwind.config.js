/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        font: 'Open Sans , sans-serif'
      },
      colors: {
        'poc-red': '#8a1e27ff',
        'poc-red-bg': '#c90616ff',
        'blue-800': '#2563EB',
        'blue-700': '#3B82F6',
        'blue-600': '#60A5FA',
        'blue-500': '#93C5FD',
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827'
      }
    }
  },
  plugins: []
}
