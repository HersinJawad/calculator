import React from "react";
import "./Display.css";

const Display = (props) => {
  const { number } = props;
  return <div className="Display">{number}</div>;
};

export default Display;
