import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/Navbar.scss";
import $ from "jquery";

const Navbar = (props) => {
  const [isHidden, setIsHidden] = useState(false);

  $(window).on("scroll", function () {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 500; // set to whatever you want it to be

    if (y_scroll_pos > scroll_pos_test) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  console.log(props);

  return (
    <>
      {isHidden && (
        <nav
          className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-end sticky-top border-bottom border-primary"
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
            <div className="d-flex align-items-center justify-content-center">
              <span className="pr-3 pb-2 text-white">Dark mode?</span>
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={() => console.log("cambiar modo")}
                ></input>
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

// const mapDispatchToProps = {

// }

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme,
  };
};

export default connect(mapStateToProps)(Navbar);
