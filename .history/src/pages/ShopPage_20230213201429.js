import React from "react";
import Heading from "../components/common/Heading";
import SpringSales from "../components/sales/SpringSales";
import LayoutGlasses from "../layout/LayoutGlasses";

const ShopPage = () => {
  return (
    <>
      <LayoutGlasses>
        <Heading className="mt-14">Shop</Heading>
        <div className="px-1">
          <div className="mt-[70px]">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, assumenda.</h2>
          </div>
        </div>
      </LayoutGlasses>
    </>
  );
};

export default ShopPage;
