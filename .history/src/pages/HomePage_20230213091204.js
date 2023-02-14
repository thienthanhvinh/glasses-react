import React, { Fragment } from "react";
import Category from "../components/category/Category";
import Heading from "../components/common/Heading";
import Intro from "../components/intro/Intro";
import SpringSales from "../components/sales/SpringSales";
import LayoutMenu from "../layout/LayoutMenu";
import GlassesGrid from "../modules/GlassesGrid";
import GlassesItem from "../modules/GlassesItem";
import { v4 } from "uuid";
import Button from "../components/button/Button";

const HomePage = () => {
  return (
    <Fragment>
      <LayoutMenu></LayoutMenu>
      <SpringSales></SpringSales>
      <Intro></Intro>
      <Category></Category>
      <Heading>Popular</Heading>
      <GlassesGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <GlassesItem key={v4()}></GlassesItem>
          ))}
        {/* <GlassesItem></GlassesItem> */}
      </GlassesGrid>
      <div className="text-center mb-[220px]">
        <Button className="mt-[70px] px-5 py-2 rounded-[4px]">See all</Button>
      </div>
      <Heading>New</Heading>
      <GlassesGrid>
        {Array(4).fill(0).map((item) => (
          <GlassesItem key={v4}></GlassesItem>
        ))}
      </GlassesGrid>
    </Fragment>
  );
};

export default HomePage;
