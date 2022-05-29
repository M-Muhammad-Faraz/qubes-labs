import React from "react";
import FooterForm from "./PageFooter/FooterForm";
import classes from "./PageFooter.module.css";
import MainFooter from "./PageFooter/MainFooter";

const PageFooter = () => {
  return (
    <footer className="container" id="contact">
      <div className={classes.getInTouch}>
        <div className="row">
          <div className="col-6">
            <h2>
              Got something for us?
              <br />
              Get in touch . . .
            </h2>
            <p>
              Our products will transform your business. Feel free to use the
              <br />
              form, or contact us directly via hello@qubevc.com
            </p>
          </div>
          <div className="col-6">
            <FooterForm />
          </div>
        </div>
      </div>
      <MainFooter />
    </footer>
  );
};

export default PageFooter;
