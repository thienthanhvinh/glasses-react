import React from "react";

const HeadLine = () => {
  return (
    <div className="w-full flex items-center gap-x-[112px]">
      <img src="/headline1.png" alt="" />
      <div>
        <h2 className="text-secondary-3 font-extrabold text-[40px] leading-[54px] mb-8">Headline</h2>
        <p className="w-[444px] mb-[48px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut
          repudiandae cupiditate temporibus numquam, dolor omnis molestiae esse
          exercitationem delectus nihil necessitatibus iste aliquid facilis.
          Officiis quod praesentium vero sunt?
        </p>
        <p className="text-tertiary text-xl">Read more -></p>
      </div>
    </div>
  );
};

export default HeadLine;
