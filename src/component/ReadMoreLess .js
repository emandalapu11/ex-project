import React, { useState } from "react";
import {Link} from "react-router-dom"
function ReadMoreLess() {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
     <nav className="navbar navbar-dark">
   <div className="container">
   <Link to={'/'} className="navbar-brand">Projects</Link>
   <div className='collapse navbar-collapse'>
   <ul className="navbar-nav">
   <li className="nav-item">
   <Link to={'/'} className="nav-link">
    MyProjects
       </Link> 
    </li>
    <li className="nav-item">
    <Link to={'/teamprojects'} className="nav-link">Teamprojects</Link>
    </li></ul>
    {isReadMore && (
      <ul className="navbar-nav">
     <li className="nav-item">
   <Link to={"/readmore"} className="nav-link ">ReadMore</Link>
     </li>
     </ul>)}
    </div></div>
   </nav>

    
   <div>
   <h4>My Active Projects</h4>
   <div className='navBar'>
   
    <Link to={'/'} className="navbar-brand">React Router</Link>
     <div className='myprojects'>
         <Link to="/">Myprojects</Link>
     </div>
     <div className='teamprojects'>
         <Link to="/teamprojects">TeamProjects</Link>
     </div>
     {isReadMore && (
      <div>
         <div className='readmore'>
         <Link to="/readmore">ReadMore</Link>
        </div>
        <div className='seemoreless'>
       <Link to="/seemoreless">SeeMoreLess</Link>
       </div>
 </div>
   )}
   <button onClick={toggleReadMoreLess}>
     {isReadMore ? "See Less ->" : "See More ->"}
   </button>
 </div></div>
;
    </>
  );
}

export default ReadMoreLess;