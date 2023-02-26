import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info pb-2 pr-1">
      <a className="navbar-brand fs-5" href="/">
        Proptify
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto me-auto">
          <li className="nav-item active">
            <a className="btn text-secondary mx-1" href="/">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="btn text-secondary mx-1" href="/buy">
              Buy
            </a>
          </li>
          <li className="nav-item">
            <a className="btn text-secondary mx-1" href="/sell">
              Sell
            </a>
          </li>
          <li className="nav-item active">
            <a className="btn text-secondary mx-1" href="/rent">
              Rent
            </a>
          </li>
        </ul>
        
          <div className="d-flex">
            <a className="btn text-secondary mx-1" href="/login">
              Login
            </a>
            <a className="btn text-secondary mx-1" href="/register">
              Register
            </a>
          </div>
    
      </div>
    </nav>
  );
}

export default Navbar;
