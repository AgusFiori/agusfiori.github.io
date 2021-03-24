import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-end sticky-top"
      style={{ zIndex: "3" }}
    >
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-white" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-white" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-white" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
