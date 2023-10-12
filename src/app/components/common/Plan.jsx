"use client";
const DisabledPlan = () => {
  const plans = [
    {
      title: "GET VERIFIED",
      desce: "Verify your Verbyo profile, so we will know that you are real.",
      dollars: "$ 2.99",
      durations: "billed monthly",
    },
    {
      title: "PREMIUM USER",
      desce: "More offers, better paid  offers, more benefits and  much more.",
      dollars: "$ 24.99",
      durations: "billed monthly",
    },
    {
      title: "YEARLY PLAN",
      desce: "Get all premium benefits for the whole year.",
      dollars: "$ 59.99",
      durations: "billed yearly",
    },
    {
      title: "LIFETIME PREMIUM",
      desce: "Verify your Verbyo profile, so we will know that you are real.",
      dollars: "$ 99.99",
      durations: "billed once in a lifetime",
    },
  ];
  return (
    <>
      <div className="max-w-[511px] w-full mx-auto sm:max-h-[485px] h-full mt-[51px]">
        <h1 className="Montserrat700 text-center text-[20px] font-[700] leading-normal text-[#D3D4D9] sm:mb-[28px] mb-[37px]">
          2. CHOOSE YOUR UPGRADE <br className="block sm:hidden" /> PLAN
        </h1>
        <div className="flex sm:flex-wrap flex-col sm:flex-row justify-between">
          {plans.map((item, index) => (
            <div key={index + "plan"}>
              <div
                className={`sm:max-w-[250px] max-w-[297px] sm:mx-0 mx-auto w-full flex  items-start sm:gap-[10px] gap-[14px] pt-[13px] pr-[13px] sm:pl-[14px] pl-[18px] ${
                  item.title == "YEARLY PLAN" ? "pb-[30px]" : "pb-[17px]"
                } border-solid border-[1px] border-[#D3D4D9] rounded-[5px] ${
                  item.title == "LIFETIME PREMIUM" && " mt-[24px] sm:mt-[0px]"
                }`}
              >
                {item.title == "GET VERIFIED" && (
                  <img src="/img/verified.svg" alt="" />
                )}
                {item.title !== "GET VERIFIED" && (
                  <img src="/img/arrow.svg" alt="" />
                )}
                <div>
                  <h1 className="Montserrat700 text-[16px] leading-normal font-[700] text-[#D3D4D9] pb-[7px]">
                    {item.title}
                  </h1>
                  <p
                    className={`Montserrat400 text-[14px] leading-normal font-[400] text-[#D3D4D9] max-w-[198px] sm:max-w-[198px] w-full ${
                      item.title == "YEARLY PLAN" ? "pb-[16px]" : "pb-[9px]"
                    }`}
                  >
                    {item.desce}
                  </p>
                  <h1 className="Montserrat700 text-[14px] leading-normal font-[700] text-[#D3D4D9] pb-[6px]">
                    {item.dollars}
                  </h1>
                  <p className="Montserrat400 text-[12px] leading-normal font-[400] text-[#D3D4D9] ">
                    {item.durations}
                  </p>
                </div>
              </div>
              {item.title == "GET VERIFIED" || item.title == "PREMIUM USER" ? (
                <p className="text-center w-full mt-[17px] mb-[34px] text-[#D3D4D9] text-[12px] leading-normal font-[400]">
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

export default DisabledPlan;
