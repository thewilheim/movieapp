import React from "react";
import searchLogo from "../images/search-logo.png";
import accountLogo from "../images/accountBox.png";
import "../styles/headerStyle.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{
        y: "-50vh",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        y: { type: "spring", stiffness: 80, damping: 15 },
        duration: 2,
      }}
    >
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
    </motion.header>
  );
}

export default Header;
