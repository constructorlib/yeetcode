import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header-all">
      <div className="navbar">
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Tutorials</a>
          <a href="#">Projects</a>
          <a href="#">Contests</a>
          <a href="#">Community</a>
          <a href="#">Calendar</a>
        </div>
        <div className="navbar-icons">
          <FontAwesomeIcon className="faicon" icon={faMagnifyingGlass} />
          <FontAwesomeIcon className="faicon" icon={faBell} />
          <FontAwesomeIcon className="faicon" icon={faUser} />
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Header;
