import React from "react";
import ContactIcons from "./PageHeader/ContactIcons";
import MainLogo from "./PageHeader/MainLogo";
import NavItems from "./PageHeader/NavItems";
import PrimaryBtn from "./Ui/PrimaryBtn";
import classes from "./PageHeader.module.css";
const PageHeader = () => {
  return (
    <header>
      <nav className="fixed-top">
        <div className={"container p-2 " + classes.pageHeader}>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <MainLogo className="align-self-center" />
              <NavItems className="align-self-center" />
            </div>
            <div className="d-flex">
              <ContactIcons className="align-self-center" />
              <div className="align-self-center">
                <PrimaryBtn>Dashboard</PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
