import React from "react";
import HeadlineImage from "./HeadlineImage";
import HeadlineContent from "./HeadlineContent"

const HeadLine = () => {
  return (
    <div className="w-full flex items-center gap-x-[112px]">
      <HeadlineImage></HeadlineImage>
      <HeadinglineContent></HeadinglineContent>
    </div>
  );
};

export default HeadLine;
