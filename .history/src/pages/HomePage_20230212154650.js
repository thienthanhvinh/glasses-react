import React, { Fragment } from "react";
import SpringSales from "../components/sales/SpringSales";
import LayoutMenu from "../layout/LayoutMenu";

const HomePage = () => {
  return (
    <Fragment>
      <LayoutMenu></LayoutMenu>
      <SpringSales></SpringSales>
      <Intro></Intro>
    </Fragment>
  );
};

export default HomePage;
