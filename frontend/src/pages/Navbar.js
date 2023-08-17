import React from "react";
import toast from 'react-hot-toast';
import logopic from '../Images/logo.png';

function Navbar() {
  const logout = async (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    toast.success("Logout Successful");
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-info pb-3 pr-1">
      <img src={logopic} alt="Logo" style={{ maxHeight: "8vh" }} />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="btn text-dark" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="btn text-dark" href="/hostel">
              Hostel
            </a>
          </li>
          <li className="nav-item">
            <a className="btn text-dark" href="/buy">
              Buy
            </a>
          </li>
          <li className="nav-item">
            <a className="btn text-dark" href="/rent">
              Rent
            </a>
          </li>
        </ul>

        {localStorage.getItem("token") ? (
          <div className="d-flex">
            <a className="btn text-dark mx-2" href="/profile">
              Profile
            </a>
            <button className="btn text-danger" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          ""
        )}
        {!localStorage.getItem("token") ? (
          <div className="d-flex">
            <a className="btn text-dark mx-2" href="/login">
              Login
            </a>
            <a className="btn text-dark mx-2" href="/register">
              Register
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
    </>
  );
}

export default Navbar;

