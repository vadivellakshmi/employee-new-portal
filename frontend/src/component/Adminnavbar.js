import React from "react";
import { Link } from "react-router-dom";
import {logout,isAuthenticated} from "./Auth"
const Adminnavbar = () =>{

  const handlelogout = () =>{

    logout()
   
  }

    return(
        <React.Fragment>
           <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid ">

    <a className="navbar-brand  text-white fst-italic fs-3" href="#"><i class="fa-brands fa-pied-piper-alt"></i>LUXMI TRADERS</a>
    <button className="navbar-toggler btn btn-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon btn btn-light"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li className="nav-item">
        <a className="nav-link fs-5 fst-italic" href="#"><Link to='/employeeDashbord' className="link text-white ">EMPLOYEE DASHBOARD</Link></a>
        </li>
       
        <li className="nav-item">
        <a className="nav-link   fs-5 fst-italic" href="#"><Link to='/project' className="link text-white ">PROJECT DASHBOARD</Link></a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fs-5 fst-italic text-white " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ADDITIONAL DETAILS
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item fs-5 fst-italic" href="#"><Link className="link" to='/role'> ROLE </Link></a></li>
            <li><a className="dropdown-item fs-5 fst-italic" href="#"><Link className="link" to='/idproof'>ID PROOF</Link></a></li>
          
            <li><a className="dropdown-item fs-5 fst-italic" href="#"><Link className="link" to='/jobtype'>JOB TYPE </Link></a></li>
          </ul>
        </li>

        </ul>
        
        
      <ul className="navbar-nav align-items-end mb-2 mb-lg-0 ">
      <li className="nav-item ">
        <a className="nav-link text-white fs-5 fst-italic" href="#"><i class="fa-solid fa-user"></i> {(isAuthenticated().name).toUpperCase()} </a>
        </li>
      <li className="nav-item ">
        <a className="nav-link fs-5 fst-italic" href="#"><Link to='/logout' className="link text-white " onClick={handlelogout}>LOGOUT </Link></a>
        </li>
      
        </ul>
    </div>
  </div>
</nav>
          
        </React.Fragment>
    )
}
export default Adminnavbar;
