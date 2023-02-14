import React from "react";
import Heading from "../components/common/Heading";
import Input from "../components/input/Input";
import SpringSales from "../components/sales/SpringSales";
import LayoutGlasses from "../layout/LayoutGlasses";

const ShopPage = () => {
  return (
    <>
      <LayoutGlasses>
        <Heading className="mt-14">Shop</Heading>
        <div className="px-16">
          <div className="mt-[70px] flex items-center">
            <p className="font-semibold text-xl text-primary mr-52">Filters</p>
            <div className="flex gap-x-3">
              <p className="bg-secondary text-primary text-sm px-4 py-1 rounded-md">
                Flex 1 x
              </p>
              <p className="bg-secondary text-primary text-sm px-4 py-1 rounded-md">
                Flex 2 x
              </p>
              <p className="bg-secondary text-primary text-sm px-4 py-1 rounded-md">
                Flex 3 x
              </p>
            </div>
            <p className="text-primary ml-auto">Sort by</p>
          </div>
          <div className="mt-[60px]">
            <div className="shadow-md bg-gray-white">
              <h2>Availability</h2>
              <div className="flex">
                <input type="checkbox" />
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </LayoutGlasses>
    </>
  );
};

export default ShopPage;
