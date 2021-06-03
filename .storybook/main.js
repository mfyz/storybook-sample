const path = require('path')

module.exports = {
	stories: [
		'../components/**/*.stories.mdx',
		'../components/**/*.stories.js',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-postcss',
		'@storybook/addon-controls',
		'@storybook/addon-a11y',
		'@storybook/addon-storysource',
		'storybook-dark-mode',
	],
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		})
		return config
	}
}