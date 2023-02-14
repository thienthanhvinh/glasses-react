import React from "react";

const FilterFrame = () => {
  return (
    <div className="shadow-md px-3 py-4 rounded-md">
      <h2 className="font-semibold text-primary leading-[33px] text-xl mb-3">
        Availability
      </h2>
      <div className="flex gap-x-2 mb-2">
        <input type="checkbox" />
        <p className="text-sm">Lorem Ipsum</p>
      </div>
      <div className="flex gap-x-2 mb-5">
        <input type="checkbox" />
        <p className="text-sm">Lorem Ipsum</p>
      </div>
    </div>
  );
};

export default FilterFrame;
