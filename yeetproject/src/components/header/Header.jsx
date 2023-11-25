import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassStart,
  faFlaskVial,
  faSquareRootVariable,
  faDna,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header-all">
      <div className="navbar">
        <span className="logo">
          <span className="logoName">
            <span>
              <FontAwesomeIcon className="logoIcon" icon={faHourglassStart} />
            </span>
            Sup!
          </span>

          <p className="logoText">Innovative way to study!</p>
        </span>
        {/* Language Selector here: */}
        <span className="language">
          <span>
            Site Language: <span className="content-show">English v </span>
          </span>
          <div className="dropdown-content">
            <p>O'zbekcha</p>
            <p>اللغة العربية</p>
            <p>Русский</p>
          </div>
        </span>
      </div>
    </div>
  );
}
