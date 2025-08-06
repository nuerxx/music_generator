module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue-600
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
        },
        secondary: {
          DEFAULT: "#64748B", // slate-500
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
        },
        accent: {
          DEFAULT: "#F59E0B", // amber-500
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        text: {
          primary: "#1E293B", // slate-800
          secondary: "#64748B", // slate-500
        },
        success: {
          DEFAULT: "#10B981", // emerald-500
          100: "#D1FAE5", // emerald-100
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          100: "#FEF3C7", // amber-100
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          100: "#FEE2E2", // red-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'focus': '0 0 0 3px rgba(37, 99, 235, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'interactive': '8px',
        'container': '4px',
      },
      animation: {
        'breathe': 'breathe 2s ease-in-out infinite',
        'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
        'fade-in-300': 'fade-in-stagger 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-600': 'fade-in-stagger 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      transitionTimingFunction: {
        'natural': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}