import React from "react";
import { useInView } from "react-intersection-observer";
import classes from "./WorkSection.module.css";
import Card from "../Ui/Card";
import WorkCard from "../WorkSection/WorkCard";
import sp from "../../Assets/WorkIcons/sp.png";
import ip from "../../Assets/WorkIcons/ai.png";
import np from "../../Assets/WorkIcons/np.png";

const WorkSection = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const pullup = () => {
    document.getElementById(classes.workSec).style.transform =
      "translateY(0px)";
  };
  return (
    <div className={classes.WorkSecBg + " d-flex justify-content-center"} id ="wus">
      <div id={classes.workSec} ref={ref} className={"align-self-center"}>
        {inView ? pullup() : null}
        <Card>
          <div className={classes.WorkSection}>
            <h1 className="text-center">Work with us</h1>
            <p className="text-center">
              Here are some reasons why you will make the best decision by
              choosing us.
            </p>
            <div className={"d-flex "}>
              <WorkCard
                image={sp}
                title="Strategic partnership
              "
                color={1}
              >
                Qube partners with promising blockchain projects, assisting them
                towards successful ICOs, through funding, advisory services and
                community awareness generation.
              </WorkCard>
              <WorkCard
                image={ip}
                title="Advisory services
              "
                color={0}
              >
                Through years of advising, Qube has accrued significant
                expertise in ICO strategy, including: token metrics, token sale
                mechanism, token distribution, exchange listings, and more.
              </WorkCard>
              <WorkCard
                image={np}
                title="Influencer Network
              "
                color={1}
              >
                Qube has an extensive social-media influencer network that it
                utilizes to build a community for its partner blockchain
                projects.
              </WorkCard>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WorkSection;
