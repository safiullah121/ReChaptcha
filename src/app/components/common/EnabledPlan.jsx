"use client";
import React, { useContext, useState } from "react";
import MyContext from "../../Context";

const EnabledPlan = () => {
  const { stripeData, setstage, detailsToggle, setdetailsToggle } =
    useContext(MyContext);
  const [plans, setplans] = useState([
    {
      id: "price_1Nw8ZgAPvJWLdjhBriY9yx4Z",
      clicked: false,
      title: "GET VERIFIED",
      desce: "Verify your Verbyo profile, so we will know that you are real.",
      durations: "billed monthly",
    },
    {
      id: "price_1Nw8aTAPvJWLdjhBfpkXeUWy",
      clicked: false,
      title: "PREMIUM USER",
      desce: "More offers, better paid  offers, more benefits and  much more.",
      durations: "billed monthly",
    },
    {
      id: "price_1Nw8bHAPvJWLdjhBjMQWVM9E",
      clicked: false,
      title: "YEARLY PLAN",
      desce: "Get all premium benefits for the whole year.",
      durations: "billed yearly",
    },
    {
      id: "price_1Nw8bzAPvJWLdjhBZBJkbmDC",
      clicked: false,
      title: "LIFETIME PREMIUM",
      desce: "Verify your Verbyo profile, so we will know that you are real.",
      durations: "billed once in a lifetime",
    },
  ]);

  const handlePlanDivClick = (id, clicked) => {
    if (clicked == false) {
      setstage(3);
    } else {
      setstage(2);
    }
    const updatedPlans = [...plans].map((plan) => {
      if (plan.id === id) {
        return { ...plan, clicked: !plan.clicked };
      } else {
        return { ...plan, clicked: false };
      }
    });

    setplans(updatedPlans);
  };
  // console.log(stripeData);

  return (
    <>
      <div className="max-w-[511px] w-full mx-auto sm:max-h-[485px] mt-[51px] h-full">
        <h1 className="text-center text-[20px] font-[700] leading-normal text-[#262F61] mb-[28px]">
          2. CHOOSE YOUR UPGRADE <br className="block sm:hidden" /> PLAN
        </h1>
        <div className="flex sm:flex-wrap flex-col sm:flex-row justify-between">
          {plans.map((item, index) => (
            <div key={index + "plans"}>
              <div
                onClick={() => {
                  handlePlanDivClick(item.id, item.clicked);
                }}
                className={`relative cursor-pointer overflow-hidden  mx-auto sm:mx-0 sm:max-w-[250px] max-w-[297px] w-full flex  items-start  sm:gap-[10px] gap-[14px] pt-[13px] pr-[13px] sm:pl-[14px] pl-[18px]  rounded-[5px] ${
                  item.title == "YEARLY PLAN" ? "pb-[30px]" : "pb-[17px]"
                } border-solid border-[1px] border-[#EEE]${
                  item.title == "LIFETIME PREMIUM" && " mt-[24px] sm:mt-[0px]"
                }`}
              >
                {item.title == "GET VERIFIED" && (
                  <img src="/img/EnabledVerified.svg" alt="" />
                )}
                {item.title == "PREMIUM USER" && (
                  <img src="/img/EnabledArrow.svg" alt="" />
                )}
                {item.title == "YEARLY PLAN" && (
                  <img src="/img/EnabledArrow2.svg" alt="" />
                )}
                {item.title == "LIFETIME PREMIUM" && (
                  <img src="/img/EnabledArrow3.svg" alt="" />
                )}
                <div>
                  <h1 className="Montserrat700 text-[16px] leading-normal font-[700] text-[#262F61] pb-[7px]">
                    {item.title}
                  </h1>
                  <p
                    className={`Montserrat400 text-[14px] leading-normal font-[400] text-[#262F61] max-w-[190px] w-full ${
                      item.title == "YEARLY PLAN" ? "pb-[16px]" : "pb-[9px]"
                    }`}
                  >
                    {item.desce}
                  </p>
                  <h1 className="Montserrat700 text-[14px] leading-normal font-[700] text-[#030303] pb-[6px]">
                    {stripeData.data.find((i) => i.id === item.id).unit_amount /
                      100 +
                      "$"}
                  </h1>
                  <p className="Montserrat400 text-[12px] leading-normal font-[400] text-[#262F61] ">
                    {item.durations}
                  </p>
                </div>
                {item.clicked == true && (
                  <img
                    className={`absolute z-[-1] right-[-1px] bottom-[-1px]`}
                    src={
                      index == 0
                        ? "/img/gradient1.svg"
                        : index == 1
                        ? "/img/gradient2.svg"
                        : index == 2
                        ? "/img/gradient3.svg"
                        : index == 3 && "/img/gradient4.svg"
                    }
                  />
                )}
              </div>
              {item.title == "GET VERIFIED" || item.title == "PREMIUM USER" ? (
                <p
                  onClick={
                    item.title == "GET VERIFIED"
                      ? () => {
                          setdetailsToggle(2);
                        }
                      : () => {
                          setdetailsToggle(1);
                        }
                  }
                  className="Montserrat600 cursor-pointer text-center w-full mt-[17px] mb-[34px] text-[#1A5EA1] text-[12px] leading-normal font-[400]"
                >
                  See details
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnabledPlan;
