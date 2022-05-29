import React from "react";
import classes from "./WorkCard.module.css";
const WorkCard = ({ image, title, children, color }) => {
  return (
    <div className={classes.WorkCard + " m-4 p-2 text-center d-flex"}>
      <div className="align-self-center">
        <img
          className="text-center"
          src={image}
          alt=""
          width="25%"
          height="25%"
        />
        <h3 className={color === 1 ? classes.CardBlue : classes.CardOrange}>
          {title}
        </h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default WorkCard;
