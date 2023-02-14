import React from "react";
import HeadlineImage from "./HeadlineImage";

const HeadLine = () => {
  return (
    <div className="w-full flex items-center gap-x-[112px]">
      <HeadlineImage></HeadlineImage>
      <HeadinglineContent></HeadinglineContent>
    </div>
  );
};

export default HeadLine;
