import React from "react";
import logo from "../img/gsgu-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <Link to="/">
        {/* <img height={150} width={150} src={logo} alt="GSGU logo" /> */}
        <img height={125} width={170} src={logo} alt="GSGU logo" />
      </Link>

      <h1>
        Cоциально-психологический факультет
        <div class="sub-header">
          Государственный социально-гуманитарный университет
        </div>
      </h1>
    </header>
  );
}

export default Header;
