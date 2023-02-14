import React, { Fragment } from "react";
import Category from "../components/category/Category";
import Heading from "../components/common/Heading";
import Intro from "../components/intro/Intro";
import SpringSales from "../components/sales/SpringSales";
import LayoutMenu from "../layout/LayoutMenu";
import GlassesGrid from "../modules/GlassesGrid";

const HomePage = () => {
  return (
    <Fragment>
      <LayoutMenu></LayoutMenu>
      <SpringSales></SpringSales>
      <Intro></Intro>
      <Category></Category>
      <Heading>Popular</Heading>
      <GlassesGrid>
        <GlassesItem></GlassesItem>
      </GlassesGrid>
    </Fragment>
  );
};

export default HomePage;
