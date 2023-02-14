import React, { Fragment } from "react";
import Category from "../components/category/Category";
import Intro from "../components/intro/Intro";
import SpringSales from "../components/sales/SpringSales";
import LayoutMenu from "../layout/LayoutMenu";

const HomePage = () => {
  return (
    <Fragment>
      <LayoutMenu></LayoutMenu>
      <SpringSales></SpringSales>
      <Intro></Intro>
      <Category></Category>
    </Fragment>
  );
};

export default HomePage;
