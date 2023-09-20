import React from 'react';
import logo1 from "../images/notinline_logo1.png";
import logo2 from "../images/notinline_logo2.png";
import play from "../images/Rectangle 48.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
              <img src={logo1} alt="Logo 1" width="50" height="50" className="mr-2" />
              <img src={logo2} alt="Logo 2" width="180" height="50" className="mr-2" />
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav mx-auto">
              <a className="nav-item nav-link px-3" href="#">Home</a>
              <a className="nav-item nav-link px-3" href="#">Health conditions</a>
              <a className="nav-item nav-link px-3" href="#">Lab tests</a>
              <a className="nav-item nav-link px-3" href="#"> Medicines</a>
            </div>
            <div className="buttons d-flex align-items-center">
              <button className="btn btn-primary">For patients</button>
              <span className="mx-2"></span>
              <button className="btn btn-primary">For hospitals</button>
            </div>
            <button className="btn btn-dark mx-auto"><img src={play} alt="Doctor Booking Logo" width="20" height="20" className="d-inline-block align-right" />Play store</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
