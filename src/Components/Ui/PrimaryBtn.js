import React from "react";
import classes from "./PrimaryBtn.module.css";
const PrimaryBtn = ({ onClick, children }) => {
  return (
    <button
      className={"btn btn-primary px-3 " + classes.mainBtn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
