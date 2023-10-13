"use client";
import { useContext, useState, useEffect } from "react";
import Layout from "../../common/Layout";
import CustomButton from "../../common/CustomButton";
import DisabledPlan from "../../common/Plan";
import Payment from "../../common/Payment";
import MyContext from "../../../Context";
import EnabledPlan from "../../common/EnabledPlan";
import PremiumDetails from "./PremiumDetails";
import VerificationDetails from "./VerificationDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stripePromise = loadStripe(
  "pk_test_51NxrYAAXhB9B84pkKtvLeQjACOpwXlgjFsbrrzNT8EakVFTYN3myJUGSvk7rZmR2Da1xZzjIpN9peLH9Oq2Fb7KW00KxPekpDM"
);

const UpgradePage = () => {
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

  const [inputVal, setinputVal] = useState("");
  const [reCaptchaCheck, setreCaptchaCheck] = useState(null);
  const {
    stage,
    setstage,
    userData,
    setuserData,
    setstripeData,
    detailsToggle,
    setdetailsToggle,
  } = useContext(MyContext);

  const data = async () => {
    const stripe = require("stripe")(
      "sk_test_51NxrYAAXhB9B84pkTkyQT1gN94ayufiLEy9G1QB5jraTSR7PfZ8Szrj49wz21Fd5xJolZt2lGH2DCIhE1eSGCKf80087VfQqRg"
    );

    const products = await stripe.prices.list({
      limit: 5,
    });
    console.log(products);
    setstripeData(products);
  };
  useEffect(() => {
    data();
  }, []);
  const handleCaptchaChange = (value) => {
    setreCaptchaCheck(value);
  };
  const handleButtonClick = async () => {
    // if (reCaptchaCheck) {
    const data = { email: inputVal };
    // Make a POST request to the API
    await fetch("https://verbyo.com/api/upgrade-app/check-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "e0d7a5baa8dd0739fee60e3c1bdfa696",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.user) {
          setuserData(result.user);
        } else {
          setuserData("No User");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    if (userData !== "No User" && userData !== null) {
      setstage(2);
    }
    // } else {
    // toast.error("Please Complete Captcha");
    // }
  };

  return (
    <>
      <Layout>
        <ToastContainer />
        {detailsToggle == 1 ? (
          <PremiumDetails />
        ) : (
          detailsToggle == 2 && <VerificationDetails />
        )}
        <div
          className={`max-w-[900px] w-full ${
            // premiumDetails == true
            //   ? " pt-[38px] sm:pt-[44px]"
            //   :
            "lg:pt-[30px] pt-[64px]"
          }  rounded-[10px] dropShadow`}
        >
          <img src="/img/sparrow.svg" alt="" className="mx-auto " />
          {stage == 4 ? (
            <div className="max-w-[563px] w-full mx-auto">
              <h1 className="Montserrat700 sm:text-[20px] text-[18px] text-[#262F61] font-[700] leading-normal text-center sm:mt-[56px] mt-[36px]">
                ACCOUNT UPGRADED
              </h1>
              <p className="Montserrat400 text-[16px] text-[#262F61] font-[500] leading-normal text-center mt-[25px] sm:h-[95px] sm:mb-[15px] mb-[44px]">
                Thank you for your patience. Your account{" "}
                <br className="block sm:hidden" /> has been successfully{" "}
                <br className="sm:block hidden" />
                upgraded. Please <br className="block sm:hidden" /> allow a few
                minutes for the changes to <br className="block sm:hidden" />{" "}
                take effect.
                <br className="sm:block hidden" /> You can now log out and log{" "}
                <br className="block sm:hidden" /> back into your Verbyo
                Account.
              </p>
              <CustomButton text="Open App" background="bg-[#3490EC]" />
              <p className="Montserrat500 text-[#A3A3A3] text-[16px] leading-normal font-[500] text-center mt-[38px] pb-[52px]">
                If you have any problems, please contact us :{" "}
                <br className="block sm:hidden" /> support@verbyo.com
              </p>
            </div>
          ) : (
            <>
              {stage == 2 && <div></div>}{" "}
              <h1 className="Montserrat700 sm:text-[20px] text-[18px] font-[700] leading-normal text-[#262F61] text-center sm:mt-[30px] mt-[21px]">
                UPGRADE YOUR VERBYO <br className="block sm:hidden" /> ACCOUNT
              </h1>
              <p className="Montserrat400 sm:text-[16px] text-[14px] font-[400] leading-normal text-[#474747] text-center sm:mt-[20px] mt-[27px]">
                Use the discounted packages below to{" "}
                <br className="block sm:hidden" /> upgrade your account.
                <br />
                <span className="Montserrat700 sm:text-[16px] text-[14px] font-[600] leading-normal text-[#000] text-center">
                  15% discount applied to all plans.
                </span>
              </p>
              <h1 className="Montserrat700 sm:text-[20px] text-[18px] font-[700] leading-normal text-[#262F61] text-center sm:mt-[68px] mt-[83px]">
                3. SEARCH YOUR VERBYO <br className="block sm:hidden" /> ACCOUNT
              </h1>
              <p className="Montserrat500 text-[16px] font-[500] leading-normal text-[#070707] mt-[15px] text-center sm:block hidden">
                Enter your email address that you used to create your Verbyo
                account.
              </p>
              <div className="relative mx-auto sm:max-w-[511px] max-w-[318px] w-full sm:mt-[37px] mt-[47px]">
                {" "}
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => {
                    setinputVal(e.target.value);
                  }}
                  placeholder="enter your email"
                  className=" Montserrat400 w-full h-[50px] pl-[18px] outline-none border-[1px] border-solid border-[#D3D4D9] rounded-[5px] placeholder:text-[#121212] "
                />
                {userData !== "No User" && userData !== null && (
                  <div
                    className={`absolute w-[27px] h-[27px] rounded-full bg-[#057C1F]  right-[13px] top-[11px]`}
                  >
                    <img
                      src="/img/verifiedCheck.svg"
                      alt=""
                      className=" mx-auto mt-[8px]"
                    />
                  </div>
                )}
                {userData == "No User" && (
                  <img
                    src="/img/cross.svg"
                    alt=""
                    className="absolute right-[13px] top-[11px]"
                  />
                )}
              </div>
              {userData == null && (
                <div className=" w-fit pb-[17px] sm:pt-[15px] pt-[29px] mx-auto">
                  <ReCAPTCHA
                    sitekey="6Lcus5coAAAAAGKNpOQoYKXF--sAecCJ0gW_BEeW"
                    onChange={handleCaptchaChange}
                  />
                </div>
              )}
              <>
                {userData == "No User" && (
                  <p className="Montserrat500 text-[14px] leading-normal font-[500] text-[#9E0B0B] sm:max-w-[511px] max-w-[315px] w-full mx-auto mt-[15px] mb-[31px] ">
                    We could not find the account.
                  </p>
                )}

                {userData !== "No User" && userData !== null && (
                  <p className="Montserrat500 text-[14px] leading-normal font-[500] text-[#10874E] sm:max-w-[511px] max-w-[315px] w-full mx-auto mt-[15px] mb-[31px] ">
                    We found the account.
                  </p>
                )}
              </>
              <CustomButton
                background="bg-[#3490EC]"
                text={
                  userData == null
                    ? "Look for account"
                    : userData !== null && userData !== "No User"
                    ? "Continue"
                    : userData == "No User" && "Searh Again"
                }
                onClick={handleButtonClick}
              />
              {stage == 1 || userData == "No User" ? (
                <DisabledPlan />
              ) : stage == 2 || stage == 3 ? (
                <EnabledPlan />
              ) : (
                stage == 0 && ""
              )}
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default UpgradePage;
