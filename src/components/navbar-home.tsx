
import React from 'react'

const Nav:React.FC = () => {
    return (
        <div className="flex-1 flex flex-col">
		<nav className="px-4 flex justify-between bg-white h-16 border-b-2">
			<div className="flex items-center">
				{/** app logo: from github.com svg **/}
				<span className="h-8 w-6">
                	<svg className="github-icon v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
				</span>
				{/* search bar close to octoicon */}
				<div className="mx-8">
					<input type="text" className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-200 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400" placeholder="Search" aria-label="Search"/>
				</div>
				{/* Menu items */}
				<div className="-mb-px flex justify-center items-center">
					<a className="no-underline text-teal-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="?">
					Pull requests
					</a>
					<a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="?">
					Issues
					</a>
					<a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="?">
					Marketplace
					</a>
					<a className="no-underline text-grey-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3" href="?">
					Explore
					</a>
				</div>
			</div>

			{/** items right **/}
			<ul className="flex items-center">
				<li className="h-10 w-10">
					<img
						className="h-full w-full rounded-full mx-auto"
						src=""
						alt="avatar" />
				</li>

			</ul>

		</nav>
	</div>
    )
}

export default Nav;
