import React from "react";
import classes from "./FooterForm.module.css";
import PrimaryBtn from "../Ui/PrimaryBtn";
const FooterForm = () => {
  return (
    <div className={"container " + classes.contactForm}>
      <form action="">
        <input
          className="my-1"
          type="text"
          id="name"
          name="names"
          placeholder="Name"
        />
        <input
          className="my-1"
          type="email"
          id="UserEmail"
          name="lastname"
          placeholder="Email"
        />
        <textarea
          className="my-1"
          id="Message"
          name="Message"
          placeholder="Message"
          style={{ height: "150px" }}
          defaultValue={""}
        />
        <PrimaryBtn>Submit</PrimaryBtn>
      </form>
    </div>
  );
};

export default FooterForm;
