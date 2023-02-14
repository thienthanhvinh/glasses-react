import React from "react";
import Heading from "../components/common/Heading";
import SpringSales from "../components/sales/SpringSales";
import LayoutGlasses from "../layout/LayoutGlasses";

const ShopPage = () => {
  return (
    <>
      <LayoutGlasses>
        <Heading className="mt-14">Shop</Heading>
        <div className="px-16">
          <div className="mt-[70px] flex items-center justify-between">
            <p className="font-semibold">Filters</p>
            <div className="">
                <p>Flex 1</p>
            </div>
            <p>Sort by</p>
          </div>
        </div>
      </LayoutGlasses>
    </>
  );
};

export default ShopPage;
