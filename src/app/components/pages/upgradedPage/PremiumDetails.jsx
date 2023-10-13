"use client";
import { useContext, useRef, useEffect } from "react";
import CustomButton from "@/app/components/common/CustomButton";
import MyContext from "@/app/Context";

const PremiumDetails = () => {
  const {
    setpremiumDetails,
    setenabledPaymentSection,
    detailsToggle,
    setdetailsToggle,
  } = useContext(MyContext);
  const premiumDetails = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.id !== "verification") {
        setdetailsToggle(0);
      }
    });
  }, []);

  const permiumDetails = [
    {
      src: "/img/EnabledVerified.svg",
      title: "GET VERIFIED",
      desce:
        "Verify your account to make sure that you are a real person. Real people means better paid offers from advertisers.",
      className: "mt-[10px] sm:max-w-[174px] max-w-[286px] w-full",
      className2: "pt-[20px]",
    },
    {
      src: "/img/FiveTimes.svg",
      title: "POST 5 TIMES DAILY",
      desce: "Increase your daily limit posts. Post more, earn more.",
      className: "mt-[20px] sm:max-w-[163px] max-w-[215px] w-full",
      className2: "pt-[49px]",
    },
    {
      src: "/img/PaidOffers.svg",
      title: "BETTER PAID OFFERS",
      desce: "Earn more revenue with better paid offers for you to post. ",
      className: "mt-[20px] sm:max-w-[164px] max-w-[226px] w-full",
      className2: "pt-[48px]",
    },
    {
      src: "/img/Exclusive.svg",
      title: "EXCLUSIVE RAFFLES",
      desce: "Get access to exclusive raffles with amazing prizes. ",
      className: "mt-[29px] sm:max-w-[188px] max-w-[220px] w-full",
      className2: "pt-[38px]",
    },
    {
      src: "/img/Ambassadar.svg",
      title: "BE A BRAND AMBASSADOR",
      desce: "Get selected to represent one of the brands in your country.",
      className: "mt-[15px] sm:max-w-[176px] max-w-[229px] w-full",
      className2: "pt-[46px]",
    },
    {
      src: "/img/Support.svg",
      title: "PRIORITY SUPPORT",
      desce:
        "Be the first in line when you experience problems with your account.",
      className: "mt-[31px]  sm:max-w-[188px] max-w-[243px] w-full",
      className2: "pt-[43px]",
    },
    {
      src: "/img/Gift.svg",
      title: "5,000 SOCIAL POINTS GIFT",
      desce: "Join more raffles and increase your chances to win.",
      className: "mt-[10px]  sm:max-w-[188px] max-w-[224px] w-full",
      className2: "pt-[51px]",
    },
  ];
  return (
    <div
      className={`${
        detailsToggle == 1 ? "opacity-1 fixed scale-70 pt-[60px]" : " scale-0"
      }  translate-y-0 top-0 w-full h-full overflow-y-auto  z-20 scrollbar-hide  bg-[#000000] bg-opacity-[0.4] transition-all ease-in-out duration-[1s]`}
    >
      <div
        className="relative flex justify-center w-full   z-20 "
        // ref={premiumDetails}
        id="verification"
      >
        <div
          id="verification"
          className="sm:pb-[75px] fixed bg-white max-w-[900px] w-full dropShadow mt-[10px] rounded-[20px]"
        >
          <img src="/img/sparrow.svg" alt="" className="mx-auto mt-[34px]" />
          <h1 className="Montserrat700 hidden sm:block sm:text-[20px] text-[18px] font-[700] leading-normal text-[#262F61] text-center sm:mt-[30px] mt-[21px]">
            Use the discounted packages below to upgrade your account.
          </h1>
          <h1 className="Montserrat700 block sm:hidden sm:text-[20px] text-[18px] font-[700] leading-normal text-[#262F61] text-center sm:mt-[30px] mt-[21px]">
            VERBYO PREMIUM ACCOUNT <br className="block sm:hidden" /> BENEFITS
          </h1>
          <p className="Montserrat400 sm:text-[16px] text-[14px] font-[400] leading-normal text-[#474747] text-center sm:mt-[20px] mt-[27px]">
            Verify your account with Verbyo and{" "}
            <br className="block sm:hidden" /> demonstrate that you are a real
            person.
            <br />
            <span className="Montserrat600 sm:block hidden sm:text-[16px] text-[14px] font-[600] leading-normal text-[#000] text-center">
              15% discount applied to all plans.
            </span>
          </p>
          <div
            id="verification"
            className="flex flex-wrap max-w-[640px] w-full justify-between sm:gap-y-[14px] gap-y-[27px] gap-x-[20px] sm:pt-[56px] pt-[27px] pb-[62px] mx-auto"
          >
            {permiumDetails.map((i, index) => (
              <div
                key={index + "premiumDetails"}
                className={` ${i.className2} sm:pt-[15px] pb-[41px] pl-[16px] pr-[10px] sm:max-w-[200px] max-w-[331px] w-full border-[1px] border-solid border-[#EEE] rounded-[5px] h-[220px] md:mx-0 mx-auto`}
              >
                <div className="mx-auto w-fit">
                  <img src={i.src} alt="" />
                </div>
                <h1 className="Montserrat700 text-center text-[14px] font-[700] leading-normal text-[#262F61] mt-[14.5px]">
                  {i.title}
                </h1>
                <p
                  className={` Montserrat400 mx-auto text-center text-[14px] font-[400] leading-normal text-[#474747] ${i.className}`}
                >
                  {i.desce}
                </p>
              </div>
            ))}
          </div>
          <CustomButton
            text="CLOSE"
            background="bg-[#3490EC]"
            onClick={() => {
              setdetailsToggle(0);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumDetails;
