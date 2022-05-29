import classes from "./Card.module.css";
import React from "react";

const Card = ({ children }) => {
  return (
    <div className={"container align-self-center " + classes.card}>
      {children}
    </div>
  );
};

export default Card;
