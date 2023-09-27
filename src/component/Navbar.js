import React from 'react';
import {Link} from "react-router-dom"
import ReadMoreLess from './ReadMoreLess ';
function Navbar(Props){
    return(
        <>
           <nav className="navbar navbar-dark">
 <div className="container">
 <Link to={'/'} className="navbar-brand">Myprojects</Link>
 <div className='collapse navbar-collapse'>
 <ul className="navbar-nav">
 <li className="nav-item">
 <Link to={'/'} className="nav-link">
  Teamprojects
     </Link> 
  </li>
  <li className="nav-item">
<Link to={'/readmore'} className="nav-link">
 ReadMore
    </Link> 
 </li>
</ul></div></div></nav>
        </>
    )
    }
export default Navbar;