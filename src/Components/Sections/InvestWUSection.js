import React from "react";
import bounty from "../../Assets/InvestWUIcons/bounty.png";
import frog from "../../Assets/InvestWUIcons/frog.png";
import eA from "../../Assets/InvestWUIcons/electrifyasia.png";
import { useInView } from "react-intersection-observer";
import Card from "../Ui/Card";
import PrimaryBtn from "../Ui/PrimaryBtn";
import classes from "./InvestWUSection.module.css";
import Invests from "../InvestWUSection/Invests";
const InvestWUSection = () => {
  const investors = [
    {
      icon: bounty,
      title: "Bounty Ox",
      desc: "Qube partners with promising blockchain projects, assisting them towards successful ICOs, through funding, advisory services and community awareness generation.",
    },
    {
      icon: frog,
      title: "Wabi",
      desc: "Qube partners with promising blockchain projects, assisting them towards successful ICOs, through funding, advisory services and community awareness generation.",
    },
    {
      icon: eA,
      title: "Electrify Asia",
      desc: "Qube partners with promising blockchain projects, assisting them towards successful ICOs, through funding, advisory services and community awareness generation.",
    },
  ];
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const pullup = () => {
    document.getElementById(classes.investWU).style.transform =
      "translateY(0px)";
    const found = document.querySelector("." + classes.investWUSect);
    console.log(found);
    found.classList.add(classes.appear);
  };
  return (
    <section id="invest" className={classes.invWu}>

    <div
      ref={ref}
      className={classes.investbg + " d-flex justify-content-center"}
      id={classes.investWU}
      >
      <div className="align-self-center ">
        {inView ? pullup() : null}
        <Card>
          <div
            className={
              classes.investWUSect +
              " d-flex justify-content-center flex-column " +
              classes.fadeIn
            }
            >
            <div className="align-self-center">
              <h1 className="text-center">Stake with us</h1>
              <p className="text-center">
                Earn passive income in crypto by delegating your idle tokens.
                <br />
                We contribute to secure the following blockchains.
              </p>
              {/* <Stakes image={Box} title="hllo" perc="12.00%"/> */}
              <div className={classes.griddisp}>
                {investors.map((elem) => {
                  return (
                    <Invests
                    image={elem.icon}
                    title={elem.title}
                    desc={elem.desc}
                    />
                    );
                  })}
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <PrimaryBtn>Load More</PrimaryBtn>
            </div>
          </div>
        </Card>
      </div>
    </div>
                  </section>
  );
};

export default InvestWUSection;
