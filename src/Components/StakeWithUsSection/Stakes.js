import React from "react";
import PrimaryBtn from "../Ui/PrimaryBtn";
import classes from "./Stakes.module.css";

const Stakes = ({ image, title, perc }) => {
  return (
    <div className={classes.stakess}>
      <div className="d-flex ">
        <div className={classes.icon}>
          <img src={image} alt="" />
        </div>
        <div>
          <h6>{title}</h6>
          <h2>{perc}</h2>
        </div>
      </div>
      <div className="text-center">
        <PrimaryBtn>Stake</PrimaryBtn>
      </div>
    </div>
  );
};

export default Stakes;
