
import React from 'react'

const Nav:React.FC = () => {
    return (
		<div className="bg-white shadow">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between">
					<div className="flex justify-center">
						{/* selected filter items */}
						<ul>
							<li className="text-gray-600">Spoken Language:</li>
							<li className="text-gray-600">Language:</li>
							<li className="text-gray-600">Date range:</li>
						</ul>
					</div>
					<div className="">
						{/* Filter button to toggle items */}
						<button type="button" className="flex items-center text-gray-700 px-3 py-1 border font-medium rounded"> 
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="w-5 h-5 mr-1">
								<g className="">
									<path d="M0 0h24v24H0z" fill="none" className=""></path>
									<path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" className=""></path>
								</g>
							</svg>
							Filters 
						</button>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Nav;
