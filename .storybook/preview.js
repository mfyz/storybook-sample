import { themes } from '@storybook/theming'

import 'tailwindcss/tailwind.css'

export const parameters = {
	layout: 'centered',
	actions: {
		argTypesRegex: '^on[A-Z].*'
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	darkMode: {
		stylePreview: true,
		darkClass: 'dark',
		dark: { ...themes.dark, appBg: 'black' },
		light: { ...themes.normal, appBg: 'white' }
	}
}
