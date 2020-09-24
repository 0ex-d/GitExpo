
import React from 'react'

/** 
 * Top Navigation component 
 */
import TopNav from '../../components/navbar-home'

import Jumbroton from "../../components/jumbroton"

import FilterNav from "../../components/nav-filter"

/** 
 * Inject css style into our view 
 * File: main.css
*/
import "../../styles/main.css";

const Home:React.FC = () => {
    return (
        <>
        <TopNav/>
        <Jumbroton 
            title="Trending" 
            subtitle="Github code explorer refined."
        />
        <FilterNav/>
        </>
    )
}

export default Home;
