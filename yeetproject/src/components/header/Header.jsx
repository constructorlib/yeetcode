import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faBell,
  faUser,
  faHourglassStart,
  faFlaskVial,
  faCalculator,
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

      <div className="rWrapper">
        <div className="register">
          <div className="registerMotivation">
            <p className="motivationStudy">
              Embark on a transformative academic journey with Sup!, your
              ultimate destination for comprehensive exam preparations in
              biology, chemistry, and mathematics! Elevate your learning
              experience with our unparalleled platform, offering a treasure
              trove of resources curated by seasoned educators. What sets us
              apart is our commitment to excellence, reflected in our official
              approval by the Department of Mathematics and Technology (DMT).
              Prepare with confidence, knowing you are aligning your studies
              with industry standards.
              <br /> <br />
              Dive into our extensive library of study materials, meticulously
              designed to demystify complex concepts and empower you to excel in
              your exams. Our user-friendly interface ensures seamless
              navigation, allowing you to focus on what truly matters—mastering
              the subjects that shape your academic future.
            </p>
          </div>
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

      <div className="bottomIcons">
        <div className="bottomWrapper">
          <span className="courses">
            <p className="courseName">Chemistry: </p>
            <FontAwesomeIcon className="logoIcon" icon={faFlaskVial} />
          </span>
          <span className="courses">
            <p className="courseName">Chemistry: </p>
            <FontAwesomeIcon className="logoIcon" icon={faSquareRootVariable} />
          </span>
          <span className="courses">
            <p className="courseName">Chemistry: </p>
            <FontAwesomeIcon className="logoIcon" icon={faDna} />
          </span>
          <span className="courses">
            <p className="courseName">Chemistry: </p>
            <FontAwesomeIcon className="logoIcon" icon={faComputer} />
          </span>
        </div>
      </div>
    </div>
  );
}
