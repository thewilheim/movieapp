import React from "react";
import logo from "../images/tmvm-logo.png";
import { motion } from "framer-motion";

function SplashScreen() {
  return (
    <main>
      <div className="splashImage"></div>
      <motion.div
        className="splashTitle"
        initial={{
          x: "-50rem",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          x: { type: "spring", stiffness: 80, damping: 15 },
          duration: 2,
        }}
      >
        <div className="splashInfo">
          <h1>BLADE RUNNER 2049</h1>
          <div className="splashDetails">
            <span>Warner Bros. Pictures</span>
            <span>98% Match</span>
            <span>2017</span>
          </div>
        </div>
        <div className="splashBtn">
          <button id="playBtn">PLAY</button>
          <button id="addToWatch">+</button>
        </div>
      </motion.div>
    </main>
  );
}

export default SplashScreen;
