"use client";
import MyContext from "@/app/Context";
import CustomButton from "@/app/components/common/CustomButton";
import { useContext, useRef, useEffect } from "react";

const VerificationDetails = () => {
  const { detailsToggle, setdetailsToggle } = useContext(MyContext);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.id !== "verification" && e.target.id !== "premium") {
        setdetailsToggle(0);
        console.log(e.target);
      }
    });
  }, []);
  return (
    <div
      className={`translate-y-0  ${
        detailsToggle == 2
          ? "opacity-1 fixed scale-70 h-full pt-[60px]"
          : " scale-0 h-[0px]"
      }  top-0 w-full  overflow-y-auto  z-20 scrollbar-hide  bg-[#000000] bg-opacity-[0.4] transition-all ease-in-out duration-[1s]`}
    >
      <div
        className="relative w-full flex justify-center verification"
        // ref={verificationRef}
      >
        <div
          id="verification"
          className={`fixed bg-white  max-w-[900px] w-full dropShadow mt-[10px] rounded-[20px]`}
        >
          <img src="/img/sparrow.svg" alt="" className="mx-auto mt-[31px]" />
          <h1 className="Montserrat700 sm:text-[20px] text-[18px] font-[700] leading-normal text-[#262F61] text-center sm:mt-[42px] mt-[27px]">
            VERBYO VERIFIED ACCOUNT
          </h1>
          <p className="Montserrat400 sm:text-[16px] text-[14px] font-[400] leading-normal text-[#474747] text-center sm:mt-[20px] mt-[21px]">
            Verify your account with Verbyo and{" "}
            <br className="block sm:hidden" /> demonstrate that you are a real
            person.
          </p>
          <div
            id="verification"
            className="sm:max-w-[400px] max-w-[332px] w-full mx-auto sm:mt-[42px] mt-[27px] sm:pt-[15px] pt-[24px] sm:pb-[50px] pb-[31px] sm:pl-[36px] pl-[21px] sm:pr-[27px] pr-[25px] border-[1px] border-solid border-[#EEE] sm:mb-[62px] mb-[51px]"
          >
            <div id="verification" className="mx-auto w-fit">
              <img src="/img/EnabledVerified.svg" alt="" />
            </div>
            <h1 className="Montserrat700 text-[14px] text-center text-[#262F61] font-[700] leading-normal sm:mt-[14px] mt-[13px]">
              GET VERIFIED
            </h1>
            <p className="Montserrat400 text-[14px] text-center text-[#474747] font-[400] leading-normal sm:max-w-[337px] w-full sm:mt-[25px] mt-[13px]">
              Verbyo is a community comprised of real individuals. This not only
              leads to higher-paid offers from advertisers but also assists us
              in countering misinformation and preventing bot{" "}
              <br className="sm:block hidden" /> registrations.
              <br className="sm:block hidden" /> Once your profile is verified,
              its quality improves, resulting in more opportunities for
              promotion.
            </p>
          </div>
          <div className="pb-[80px] sm:pb-[76px]">
            {" "}
            <CustomButton
              text="Close"
              background="bg-[#3490EC]"
              onClick={() => {
                setdetailsToggle(0);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationDetails;
