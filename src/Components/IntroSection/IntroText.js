import React from "react";
import classes from "./IntroText.module.css";
import PrimaryBtn from "../Ui/PrimaryBtn";
import { useInView } from "react-intersection-observer";
const IntroText = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const pullup = () => {
    document.getElementById(classes.introTx).style.transform =
      "translateY(0px)";
    const found = document.querySelector("." + classes.IntroText);
    console.log(found);
    found.classList.add(classes.appear);
  };
  return (
    <div
      ref={ref}
      id={classes.introTx}
      className={classes.IntroText + " " + classes.fadeIn}
    >
      {inView ? pullup() : null}
      <div>
        <h1>
          <span>Qube</span> partners with high-potential blockchain projects.
        </h1>
        <p>
          Professional investors, blockchain strategists and social-media
          influencers, investing in a decentralized future.
        </p>
        <PrimaryBtn classsName="mx-5">Learn More</PrimaryBtn>
      </div>
    </div>
  );
};

export default IntroText;
