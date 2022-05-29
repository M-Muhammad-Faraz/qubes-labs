import React from "react";
import { useInView } from "react-intersection-observer";
import classes from "./StakeWUSection.module.css";
import Card from "../Ui/Card";
import Box from "../../Assets/StakeWithUsIcons/box.png";
import Pinter from "../../Assets/StakeWithUsIcons/pinter.png";
import Globe from "../../Assets/StakeWithUsIcons/globe.png";
import Atom from "../../Assets/StakeWithUsIcons/atom.png";
import Bird from "../../Assets/StakeWithUsIcons/bird.png";
import Confer from "../../Assets/StakeWithUsIcons/confer.png";
import HalfBox from "../../Assets/StakeWithUsIcons/halfbox.png";
import Triangle from "../../Assets/StakeWithUsIcons/triangle.png";
import Stakes from "../StakeWithUsSection/Stakes";
import PrimaryBtn from "../Ui/PrimaryBtn";
const StakeWUSection = () => {
  const stakes = [
    {
      icon: Box,
      title: "Fantom (FTM)",
      stakePerc: "15.00%",
    },
    {
      icon: Pinter,
      title: "Polkadot (DOT)",
      stakePerc: "15.00%",
    },
    {
      icon: Globe,
      title: "Terra (LUNA)",
      stakePerc: "15.00%",
    },
    {
      icon: Atom,
      title: "Cosmos (ATOM)",
      stakePerc: "15.00%",
    },
    {
      icon: Bird,
      title: "Kusama (KSM)",
      stakePerc: "15.00%",
    },
    {
      icon: Confer,
      title: "Crypto (CRO)",
      stakePerc: "15.00%",
    },
    {
      icon: HalfBox,
      title: "xDai (STAKE)",
      stakePerc: "15.00%",
    },
    {
      icon: Triangle,
      title: "Avalanche (AVAX)",
      stakePerc: "15.00%",
    },
  ];
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const pullup = () => {
    document.getElementById(classes.stakeWU).style.transform =
      "translateY(0px)";
    const found = document.querySelector("." + classes.stakeWUSect);
    console.log(found);
    found.classList.add(classes.appear);
  };
  return (
    <section id="stake" className={"py-5"}>

    <div
      ref={ref}
      className={classes.stakesbg + " d-flex justify-content-center"}
      id={classes.stakeWU}
      >
      <div className="align-self-center ">
        {inView ? pullup() : null}
        <Card>
          <div
            className={
              classes.stakeWUSect +
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
                {stakes.map((elem) => {
                  return (
                    <Stakes
                    image={elem.icon}
                    title={elem.title}
                    perc={elem.stakePerc}
                    />
                    );
                  })}
              </div>
            </div>
            <div className="d-flex justify-content-center my-3">
              <PrimaryBtn>Load More</PrimaryBtn>
            </div>
          </div>
        </Card>
      </div>
    </div>
                  </section>
  );
};

export default StakeWUSection;
