import React from 'react'
import PropTypes from 'prop-types'

const Button = React.forwardRef(({ primary, ...props }, ref) => (
	<a
		ref={ref}
		{...props}
		className={`
			relative inline-flex items-center justify-center px-4 py-2
			border border-transparent shadow-sm cursor-pointer
			text-sm font-medium rounded-md text-white focus:outline-none
			${primary
				? 'text-white bg-indigo-600 hover:bg-indigo-700'
				: `text-gray-700 dark:text-white
					bg-gray-200 hover:bg-gray-300
					dark:bg-gray-700 dark:hover:bg-gray-600`}
			${props.className}
		`}
	>
		{props.children}
	</a>
))

Button.propTypes = {
	children: PropTypes.node.isRequired,
	primary: PropTypes.bool,
	href: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
}

export default Button