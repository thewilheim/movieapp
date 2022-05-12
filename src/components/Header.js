import React from "react";
import searchLogo from "../images/search-logo.png";
import accountLogo from "../images/accountBox.png";
import "../styles/headerStyle.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="navLeft">
          <ul>
            <li>Dashboard</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Kids</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="navRight">
          <img src={searchLogo} alt="" />
          <img src={accountLogo} alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
