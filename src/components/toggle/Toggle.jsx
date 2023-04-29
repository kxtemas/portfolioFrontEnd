import React, { useContext } from "react";
import "./Toggle.css";
import { ThemeContext } from "../../context";

/**
 * Date: 02/12/22
 * @author Katie Munoz
 * @version 2.
 *This function creates a component called Toggle that allows for the toggling of a day/night mode switch
 */ 

function Toggle({ toggled, onClick }) {
  const theme = useContext(ThemeContext);
// This function handles the click event of the toggle and dispatches the TOGGLE action to the theme reducer
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  // creates the toggle switch using the given toggled state and onClick handler
  return (
    <div className="position" onClick={handleClick}>
      <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
        <div className="notch"></div>
        <div>
          <div className="shape sm" />
          <div className="shape sm" />
          <div className="shape md" />
          <div className="shape lg" />
        </div>
      </div>
    </div>
  );
}

export default Toggle;