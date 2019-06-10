import React from "react";
import "./Nav.css";

function Nav(props) {
  return (<nav>
    
      <h1 className="brand animated lightSpeedIn">
        <h1>Clicky Game</h1>
      </h1>

      <h1 id="rw"></h1>

      <h1 id="cur-sco">Current Score: {props.score} </h1>

      <h1 id="top-sco">Top Score: {props.newTopScore}</h1>

      <h1 id="right-wrong"> {props.showRightWrong}</h1>


    
  </nav>)
}

export default Nav;