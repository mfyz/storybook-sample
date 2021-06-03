import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import PropTypes from 'prop-types'

// import featureStatuses from '../../constants/feature-statuses'

const FeatureCard = ({
	feature,
	onDeleteFeature,
	readOnly
}) => (
	<div
		key={feature.id}
		className={`
			col-span-1 shadow-sm rounded-md bg-white dark:bg-gray-700
			border-l border-r border-b border-gray-200 dark:border-gray-500
		`}
	>
		<a
			className={`
				block h-32
				bg-gray-200 dark:bg-gray-600
				rounded-t-md
				text-white text-md font-medium
			`}
		>
			{feature.cover_image && (
				<img
					src={feature.cover_image}
					className="object-cover h-32 w-full rounded-t-md"
					alt="Cover Image"
				/>
			)}
		</a>
		<div className="flex">
			<div className="flex-1 px-4 py-4 text-sm">
				<a
					href={`/feature/${feature.id}`}
					className="text-gray-900 dark:text-gray-200 font-medium hover:text-gray-600"
				>
					{feature.title}
				</a>
			</div>
			{!readOnly && (
				<div className="flex-shrink-0 pr-2 pt-2">
					<Menu as="div" className="relative z-30 inline-block text-left">
						{({ open }) => (
							<>
								<div>
									<Menu.Button className="p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none">
										<span className="sr-only">Open options</span>
										<DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
									</Menu.Button>
								</div>
								<Transition
									show={open}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items
										static
										className={`
												origin-top-right absolute right-0 mt-2 w-56 rounded-md
												shadow-lg bg-white
												ring-1 ring-black ring-opacity-5 focus:outline-none
											`}
									>
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<a
														href={`/feature/edit/${feature.id}`}
														className={`flex px-4 py-2 text-sm ${
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700'
														}`}
													>
														<PencilIcon
															className="mr-3 h-5 w-5 text-gray-600"
															aria-hidden="true"
														/>
														<span>Edit Feature</span>
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														onClick={(e) => {
															e.preventDefault()
															onDeleteFeature(feature.id)
														}}
														className={`flex px-4 py-2 text-sm ${
															active
																? 'bg-gray-100 text-red-900'
																: 'text-red-700'
														}`}
													>
														<TrashIcon
															className="mr-3 h-5 w-5"
															aria-hidden="true"
														/>
														<span>Delete</span>
													</a>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</>
						)}
					</Menu>
				</div>
			)}
		</div>
	</div>
)

FeatureCard.propTypes = {
	feature: PropTypes.object.isRequired,
	className: PropTypes.string,
	onDeleteFeature: PropTypes.func,
	readOnly: PropTypes.bool,
}

export default FeatureCard
