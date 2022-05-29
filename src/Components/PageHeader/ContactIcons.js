import React from "react";
import linkedIn from "../../Assets/ContactIcons/in.png";
import discord from "../../Assets/ContactIcons/discord.png";
import twitter from "../../Assets/ContactIcons/twitter.png";
import classes from "./ContactIcons.module.css";
const ContactIcons = ({ className }) => {
  return (
    <div className={className}>
      <div className={"d-flex mx-3 " + classes.contactIcons}>
        <a href="#">
          <img src={linkedIn} alt="" height="32px" />
        </a>
        <a href="#">
          <img src={discord} alt="" height="32px" />
        </a>
        <a href="#">
          <img src={twitter} alt="" height="32px" />
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
