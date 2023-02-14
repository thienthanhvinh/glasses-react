import React from "react";
import { useController } from "react-hook-form";

const Input = ({ type, placeholder, name, control, children, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...field}
        className="w-full px-4 py-4 rounded-lg border-2 border-gray-300 mt-2 outline-none focus:border-gray-400 transition-all duration-200 bg-transparent text-sm"
      />
      {children &&<span className=" absolute right-6 top-3/4 -translate-y-2/4 cursor-pointer select-none">
        {children}
      </span>}
    </div>
  );
};

export default Input;
