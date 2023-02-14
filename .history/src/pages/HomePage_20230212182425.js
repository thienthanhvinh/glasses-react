import React, { Fragment } from "react";
import Category from "../components/category/Category";
import Heading from "../components/common/Heading";
import Intro from "../components/intro/Intro";
import SpringSales from "../components/sales/SpringSales";
import LayoutMenu from "../layout/LayoutMenu";
import GlassesGrid from "../modules/GlassesGrid";
import GlassesItem from "../modules/GlassesItem";
import {v3} from "uuid";

const HomePage = () => {
  return (
    <Fragment>
      <LayoutMenu></LayoutMenu>
      <SpringSales></SpringSales>
      <Intro></Intro>
      <Category></Category>
      <Heading>Popular</Heading>
      <GlassesGrid>
        {Array(4).fill(0).map((item) => (
          <GlassesItem key={v3()}></GlassesItem>
        ))}
        {/* <GlassesItem></GlassesItem> */}
      </GlassesGrid>
    </Fragment>
  );
};

export default HomePage;
