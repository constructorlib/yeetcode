import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
        <div className="navbar-icons"></div>
      </div>
    </div>
  );
}

export default Header;
