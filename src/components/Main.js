import React, { useState } from "react";
import Header from "./Header";
import SplashScreen from "./SplashScreen";
import Recommneded from "./Recommneded";

function Main(props) {
  const { movieData, configData } = props;
  return (
    <div className="contentContainer">
      <Header />
      <SplashScreen />
      <Recommneded
        name={"Popular"}
        movieData={movieData}
        configData={configData}
      />
    </div>
  );
}

export default Main;
