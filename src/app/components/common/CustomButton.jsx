"use client";
import { useContext } from "react";
import MyContext from "../../Context";

const CustomButton = ({ text, onClick, background ,ref}) => {
  const {} = useContext(MyContext);
  return (
    <div className="mx-auto max-w-[300px] w-full">
      <button
      ref={ref}
        type="submit"
        className={`Montserrat600 text-[16px] font-[600] leading-normal w-[300px] h-[40px] rounded-[30px] text-[#fff] hover:opacity-[0.85] duration-300 ease-out  ${background}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
