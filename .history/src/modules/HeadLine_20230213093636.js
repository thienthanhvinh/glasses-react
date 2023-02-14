import React from "react";
import HeadlineImage from "./HeadlineImage";
import HeadlineContent from "./HeadlineContent";

const HeadLine = ({type = "default"}) => {
    if(type === "default")
  return (
    <div className="w-full flex items-center gap-x-[112px]">
      <HeadlineImage></HeadlineImage>
      <HeadlineContent></HeadlineContent>
    </div>
  );
};

export default HeadLine;
