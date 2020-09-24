
import React from 'react'

/** 
 * Top Navigation component 
 */
import TopNav from '../../components/navbar-home'

/** 
 * Inject css style into our view 
 * File: main.css
*/
import "../../styles/main.css";

const Home:React.FC = () => {
    return (
        <TopNav/>
    )
}

export default Home;
