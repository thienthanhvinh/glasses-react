import React from "react";
import HeadlineImage from "./HeadlineImage";
import HeadlineContent from "./HeadlineContent";

const HeadLine = ({type = "default"}) => {
    if(type === "default") {
        return (
            <div className="w-full flex items-center gap-x-[112px]">
              <HeadlineImage></HeadlineImage>
              <HeadlineContent></HeadlineContent>
            </div>
          );
    } else {
        return (
            <div className="w-full flex items-center">
              <HeadlineContent className="ml-[112px]"></HeadlineContent>
              <HeadlineImage src="headline2.png" className="w-1/2"></HeadlineImage>
            </div>
          );
    }

};

export default HeadLine;
