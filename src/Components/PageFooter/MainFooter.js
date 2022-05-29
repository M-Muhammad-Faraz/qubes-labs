import React from "react";
import classes from "./MainFooter.module.css";
import mainLogo from "../../Assets/MainLogo.png";
const MainFooter = () => {
  return (
    <div className={classes.mainFooter}>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <div className={classes.ggwp}>
                <img src={mainLogo} alt="" />
              </div>
              <p className={"small text-muted " + classes.gwwp}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className={"small text-muted mb-0 " + classes.gwwp}>
                © Copyrights. All rights reserved.{" "}
                <a className="text-primary" href="#">
                  Qubelabs.com
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className=" mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Staking</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className=" mb-3">Contacts</h5>
              <div className={classes.pa}>
                One Ferry Building, Suite 255.
                <br /> San Francisco, CA 94111
                <br />
                <span>+1 (415) 677-5340</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className=" mb-3">Newsletter</h5>
              <p className={"small text-muted " + classes.gwwp}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
