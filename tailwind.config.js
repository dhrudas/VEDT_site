/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				navy: '#1a2133',
				gold: '#b8973a',
				'gold-light': '#d4b05a',
				cream: '#f9f6f0',
				soft: '#f3f0ea',
				'budget-c': '#4a7c6f',
				'disc-c': '#3d7a9e',
				'mod-c': '#b8973a',
				'lux-c': '#7c4a8a',
				'free-c': '#1e6b3c',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				heading: ['var(--font-heading)'],
				body: ['var(--font-body)'],
				display: ['var(--font-display)'],
				mono: ['var(--font-mono)']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'hero-zoom': {
					'0%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1.12)' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scroll-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.3' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'hero-zoom': 'hero-zoom 16s ease-in-out infinite alternate',
				'fade-up': 'fade-up 1.2s ease both',
				'fade-up-delay-1': 'fade-up 1.2s 0.2s ease both',
				'fade-up-delay-2': 'fade-up 1.2s 0.35s ease both',
				'fade-up-delay-3': 'fade-up 1.2s 0.5s ease both',
				'fade-up-delay-4': 'fade-up 1.2s 0.65s ease both',
				'fade-up-delay-5': 'fade-up 1.2s 0.8s ease both',
				'scroll-pulse': 'scroll-pulse 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
