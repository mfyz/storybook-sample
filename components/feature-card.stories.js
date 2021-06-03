import React from 'react'

import FeatureCard from './feature-card'

// export const Primary = () => <Button primary>Plain Button Comp</Button>

const Template = (args) => <FeatureCard {...args} />

const createComponentWithArgs = (args) => {
	const Comp = Template.bind({})
	Comp.args = args
	return Comp
}

export const JustTitle = createComponentWithArgs({
	feature: {
		id: 123,
		title: 'Simple Card',
	},
	readOnly: true
})

export const WithCoverImage = createComponentWithArgs({
	feature: {
		id: 123,
		title: 'Card with Cover Image',
		cover_image: 'https://ik.imagekit.io/featuristik/raimond-klavins-gmxGONiOPqY-unsplash_Yf0wpw5A5.jpg'
	},
	readOnly: true
})

export const CardEditOptions = createComponentWithArgs({
	feature: {
		id: 123,
		title: 'Simple Card',
	},
	onDeleteFeature: () => {
		alert('Handling onDeleteFeature')
	}
})

export default {
	title: 'FeatureCard',
	component: FeatureCard,
	decorators: [
		(Story) => (
			<div className="w-96">
				{Story()}
			</div>
		)
	]
}