import React from "react";
import FilterItem from "./FilterItem";

const FilterFrame = ({title}) => {
  return (
    <div className="shadow-md px-3 py-4 rounded-md">
      <h2 className="font-semibold text-primary leading-[33px] text-xl mb-3">
        Availability
      </h2>
        <FilterItem></FilterItem>
    </div>
  );
};

export default FilterFrame;
