import React from "react";

const Navbar = () =>{
    return(
        <React.Fragment>
           <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid ">

    <a className="navbar-brand  text-white fst-italic fs-3" href="#"><i class="fa-brands fa-pied-piper-alt"></i>LUXMI TRADERS</a>
    <button className="navbar-toggler btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon btn btn-dark"></span>
    </button>
    <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarSupportedContent">
      
        
      <ul className="navbar-nav mb-2 mb-lg-0 ">
      <li className="nav-item ">
        <a className="nav-link fst-italic fs-5 text-white " href="#">EMPLOYEE PORTAL LOGIN</a>
        </li>
        
        </ul>
    </div>
  </div>
</nav>
          
        </React.Fragment>
    )
}
export default Navbar;
