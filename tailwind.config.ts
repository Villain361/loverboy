
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				'glow': '0 0 20px rgba(160, 160, 255, 0.2)',
				'glow-strong': '0 0 30px rgba(160, 160, 255, 0.4)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-delayed': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'50%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(160, 160, 255, 0.2)' },
					'50%': { boxShadow: '0 0 30px rgba(160, 160, 255, 0.6)' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'scale-up': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' },
				},
				'tilt': {
					'0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
					'25%': { transform: 'rotateX(2deg) rotateY(2deg)' },
					'75%': { transform: 'rotateX(-2deg) rotateY(-2deg)' },
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
				'blink-caret': {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'hsl(var(--primary))' },
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'fade-in-delayed': 'fade-in-delayed 1.2s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'scale-up': 'scale-up 0.3s ease-out forwards',
				'tilt': 'tilt 5s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'blink-caret': 'blink-caret 0.75s step-end infinite',
				'shimmer': 'shimmer 3s linear infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
