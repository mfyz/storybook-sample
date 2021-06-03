import React from 'react'

import Button from './button'

// export const Primary = () => <Button primary>Plain Button Comp</Button>

const Template = (args) => <Button {...args} />

const createComponentWithArgs = (args) => {
	const Comp = Template.bind({})
	Comp.args = args
	return Comp
}

export const Regular = createComponentWithArgs({
	children: 'Regular Button',
	href: 'https://google.com'
})

export const Primary = createComponentWithArgs({
	children: 'Primary Button',
	primary: true,
	onClick: () => {
		alert('Handling onClick')
	}
})

export default {
	title: 'Button',
	component: Button,
}