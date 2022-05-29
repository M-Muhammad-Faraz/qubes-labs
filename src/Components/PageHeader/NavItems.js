import React from "react";
import classes from "./NavItems.module.css";
const NavItems = ({ className }) => {
  return (
    <div className={className}>
      <ul className={"d-flex " + classes.naviItems}>
        <li>
          <a href="#wus">Features</a>
        </li>
        <li>
          <a href="#stake">Staking</a>
        </li>
        <li>
          <a href="#invest">Portfolio</a>
        </li>
        <li>
          <a href="#faq">FAQs</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
