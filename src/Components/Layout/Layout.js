import React from "react";
import PageFooter from "../PageFooter";
import PageHeader from "../PageHeader";

const Layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
};

export default Layout;
