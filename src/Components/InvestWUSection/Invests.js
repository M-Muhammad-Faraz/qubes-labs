import React from "react";
import classes from "./Invests.module.css";
const Invests = ({ image, title, desc }) => {
  return (
    <div className={classes.invests}>
      <div>
        <div className={classes.icon + " text-center"}>
          <img src={image} alt="" />
        </div>
        <div className={classes.texts +" text-center"}>
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Invests;
