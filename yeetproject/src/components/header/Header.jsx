import React from "react";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faBell,
  faUser,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header-all">
      <div className="navbar">
        <span className="logo">
          <span>
            <FontAwesomeIcon className="faicon" icon={faHourglassStart} />
          </span>
          SUP!
        </span>
        <span className="language">
          <span>
            Site Language <span className="content-show">English</span>
          </span>
          <div className="dropdown-content">
            <p>Uzbek</p>
            <p>Russian</p>
          </div>
        </span>
      </div>
      <div className="not-navbar">
        {/* <div className="navbar-icons">
          <FontAwesomeIcon className="faicon" icon={faMagnifyingGlass} />
          <FontAwesomeIcon className="faicon" icon={faBell} />
          <FontAwesomeIcon className="faicon" icon={faUser} />
        </div> */}
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Header;
