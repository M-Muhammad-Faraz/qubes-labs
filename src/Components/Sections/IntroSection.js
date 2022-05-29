import React, { useEffect } from "react";
import IntroParticles from "../IntroSection/IntroParticles";
import IntroText from "../IntroSection/IntroText";
import classes from "./IntroSection.module.css";
const IntroSection = () => {
  // useEffect(() => {
  //   const canvs = document.querySelector(".tsparticles-canvas-el");
  //   canvs.style.width = null;
  //   canvs.style.height = null;

  //   console.log(canvs.style.width);
  // }, []);

  return (
    <section className={classes.IntroSection} id="Intro">
      <div className={"container d-flex " + classes.ctnr}>
        <div className="align-self-center">
          <div className="row">
            <div className="col-6">
              <IntroText />
            </div>
            <div className="col-6">
              <IntroParticles />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
