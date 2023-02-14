import React from "react";
import Heading from "../components/common/Heading";
import LayoutGlasses from "../layout/LayoutGlasses";

const ContactPage = () => {
  return (
    <LayoutGlasses>
      <Heading className="mt-14" type="secondary">
        Contact
      </Heading>
      <div className="w-1/2 mx-auto flex flex-col items-center justify-center mb-20">
        <p className="text-justify text-primary font-medium mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          vero odio numquam cumque maxime expedita ipsum iusto eaque, temporibus
          atque labore quae deleniti modi, distinctio ea pariatur vitae, ex
          magni. Sint molestiae quia quo ut nulla officiis temporibus eveniet,
          modi magnam, ad, optio inventore iste voluptatem! Quibusdam, eum.
          Fugiat, eius!
        </p>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1582142407894-ec85a1260a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="h-[460px] rounded-xl"
            alt=""
          />
        </div>
      </div>
    </LayoutGlasses>
  );
};

export default ContactPage;
