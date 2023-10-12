"use client";
import { useContext } from "react";
import MyContext from "../../Context";

const Layout = ({ children }) => {
  const { premiumDetails } = useContext(MyContext);
  return (
    // ${
    //   premiumDetails == true ? "pb-[87px] " : " "
    // }
    <div
      className={` w-full lg:pt-[78px] 
       sm:pb-[85px]  pb-[125px]`}
    >
      <div className="mx-auto max-w-[900px] w-full sm:mb-[66px]">
        {children}
      </div>

      <div className=" max-w-[346px] w-full mx-auto sm:flex hidden flex-col sm:gap-[19px] gap-[23px]">
        <p className="Montserrat400 sm:text-[14px] text-[12px] font-[400] leading-normal text-center w-full">
          Terms & Conditions | Privacy Policy | Contact Us
        </p>
        <p className="Montserrat400 sm:text-[14px] text-[12px] font-[400] leading-normal text-center  w-full">
          Copyright to Verbyo LLC, 2019
        </p>
      </div>
    </div>
  );
};

export default Layout;
