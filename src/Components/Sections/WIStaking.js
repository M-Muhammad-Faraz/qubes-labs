import React from "react";
import Card from "../Ui/Card";
import { useInView } from "react-intersection-observer";
import classes from "./WIStaking.module.css";
import QnAAccordion from "../WIStakingSection/QnAAccordion";

const WIStaking = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const pullup = () => {
    document.getElementById(classes.stakingSec).style.transform =
      "translateY(0px)";
  };
  return (
    <div className={classes.stakingSecBg + " d-flex justify-content-center" }id="faq">
      <div id={classes.stakingSec} ref={ref} className={"align-self-center"}>
        {inView ? pullup() : null}
        <Card>
          <div className={classes.stakingSection}>
            <h1 className="text-center">What is Staking?</h1>
            <p className="text-center">
              Proof of Stake blockchains use staking as the security mechanism
              to keep nodes honest. You can help protect networks, while
              <br /> holding your crypto in your wallet, delegating them to a
              trusted validator. In return, you get rewards.
            </p>
            <QnAAccordion />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WIStaking;
