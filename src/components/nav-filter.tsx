
import React from 'react'
import FilterButton from './filter-button'

const Nav:React.FC = () => {
    return (
		<div className="bg-white shadow-sm border-b fixed- top-0 w-full animated z-40">
			<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						{/* toggle repos/users */}
						<div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
							<button className="repo-user-button inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active" id="grid">
								<span>Repositories </span>
							</button>
							<button className="repo-user-button inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2" id="list">
								<span>Developers</span>
							</button>
						</div>
						{/* filter by spoken | lang | date */}
						<div className="text-gray-600"> <FilterButton label="Spoken Language"/></div>
						<div className="text-gray-600"> <FilterButton label="Language"/></div>
						<div className="text-gray-600"> <FilterButton label="Date range"/></div>
					</div>
			</div>
		</div>
    )
}

export default Nav;
