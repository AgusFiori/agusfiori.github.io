import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <ul>
      <a href="#t1">
        <li class="icon fa fa-home" id="uno">
          <FontAwesomeIcon icon={faHome} />
        </li>
      </a>
      <a href="#t2">
        <li class="icon fa fa-keyboard-o" id="dos">
          <FontAwesomeIcon icon={faUser} />
        </li>
      </a>
      <a href="#t3">
        <li class="icon fa fa-coffee" id="tres">
          <FontAwesomeIcon icon={faBriefcase} />
        </li>
      </a>
      <a href="#t4">
        <li class="icon fa fa-dribbble" id="cuatro">
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
      </a>
    </ul>
  );
};

export default Navbar;
