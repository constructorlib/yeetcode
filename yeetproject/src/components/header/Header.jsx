import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faBell,
  faUser,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [language, setLanguage] = useState([]);
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

      <div className="rWrapper">
        <div className="register">
          <div className="registerMotivation">1</div>
          <div className="registerPlace">
            <p className="adverIn">
              The innovative, free and effective way <br /> to prepare for
              exams!
            </p>
            <button className="btn regNow">Get Started</button>
            <button className="btn haveAcc">I already have an account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
