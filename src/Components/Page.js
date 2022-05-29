import React from "react";
import IntroSection from "./Sections/IntroSection";
import InvestWUSection from "./Sections/InvestWUSection";
import StakeWUSection from "./Sections/StakeWUSection";
import WIStaking from "./Sections/WIStaking";
import WorkSection from "./Sections/WorkSection";

const Page = () => {
  return (
    <>
      <IntroSection />
      <WorkSection />
      <StakeWUSection />
      <InvestWUSection />
      <WIStaking />
    </>
  );
};

export default Page;
