import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 120, width: 120 }}
      >
        <div className="Tilt-inner">
          <img alt="logo" src={brain} style={{ paddingTop: "5px" }} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
