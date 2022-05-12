import React from "react";
import logo from "../images/tmvm-logo.png";

function SplashScreen() {
  return (
    <main>
      <div className="splashImage"></div>
      <div className="splashTitle">
        <div className="splashInfo">
          <img src={logo} alt="" />
          <div className="splashDetails">
            <span>Sony Pictures Animation</span>
            <span>98% Match</span>
            <span>2021</span>
          </div>
        </div>
        <div className="splashBtn">
          <button id="playBtn">PLAY</button>
          <button id="addToWatch">+</button>
        </div>
      </div>
    </main>
  );
}

export default SplashScreen;
