import React from "react";
import MLogo from "../../Assets/MainLogo.png";
const MainLogo = ({ className }) => {
  return (
    <div id="MlogoH" className={className}>
      <a href="#Intro">
      <img src={MLogo} alt="Main Logo" height="50px" />
      </a>
    </div>
  );
};

export default MainLogo;
