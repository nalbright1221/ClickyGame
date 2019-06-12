import React from "react";
import "./Title.css";

function Title(props) {

    // console.log(props.children);
  return <h1 className="title">{props.children}</h1>;
}

export default Title;