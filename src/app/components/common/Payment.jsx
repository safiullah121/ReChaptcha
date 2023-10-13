"use client";
import { useContext, useState } from "react";
import CustomButton from "./CustomButton";
import MyContext from "../../Context";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  CardElement,
} from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51NxrYAAXhB9B84pkKtvLeQjACOpwXlgjFsbrrzNT8EakVFTYN3myJUGSvk7rZmR2Da1xZzjIpN9peLH9Oq2Fb7KW00KxPekpDM"
// );

const Payment = () => {
  const elements = useElements();
  const stripe = useStripe();
  const { stage, setstage } = useContext(MyContext);
  const [userPaymentData, setuserPaymentData] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();

    // Fetch the client secret from your server
    const { clientSecret } = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 100,
        currency: "eur",
      }),
    }).then((res) => res.json());

    // Use Elements and Stripe to confirm the payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement), // Make sure CardElement is defined
        },
      }
    );

    if (error) {
      // Handle the error, e.g., show an error message to the user
      console.error(error);
    } else {
      // Payment has been confirmed successfully
    }
    console.log(clientSecret);
  };

  return (
    <>
      <div className="sm:max-w-[511px] max-w-[301px] w-full  mx-auto mt-[88px]">
        <h1
          className={`Montserrat700 text-center text-[20px] font-[700] leading-normal ${
            stage == 3 ? "text-[#262F61]" : "text-[#D3D4D9]"
          } mb-[39px]`}
        >
          3. ENTER YOUR PAYMENT DETAILS
        </h1>
        <form onSubmit={handlePayment}>
          <div className="flex flex-col gap-[13px] pb-[34px]">
            <CardNumberElement
              // className="border-solid border-[1px] border-[#D3D4D9] rounded-[5px] h-[50px] text-[16px] font-[400] leading-normal   text-[#D3D4D9] pt-[16px] pl-[18px] w-full"
              options={{
                placeholder: "Card Number",
                disabled: stage !== 3 && true,
                style: {
                  base: {
                    fontSize: "16px",
                    "::placeholder": {
                      color: "#D3D4D9",
                      fontSize: "16px", // Customize the color here
                    },
                  },
                },
              }}
            />

            <div className="flex justify-between">
              <CardExpiryElement
                className="border-solid border-[1px] border-[#D3D4D9] rounded-[5px] h-[50px] text-[16px] font-[400] leading-normal   text-[#D3D4D9] pt-[16px] pl-[18px] w-[163px]"
                options={{
                  disabled: stage !== 3 && true,

                  style: {
                    base: {
                      fontSize: "16px",
                      "::placeholder": {
                        color: "#D3D4D9",
                        fontSize: "16px", // Customize the color here
                      },
                    },
                  },
                }}
              />
              <CardCvcElement
                className="border-solid border-[1px] border-[#D3D4D9] rounded-[5px] h-[50px] text-[16px] font-[400] leading-normal   text-[#D3D4D9] pt-[16px] pl-[18px] w-[163px]"
                options={{
                  disabled: stage !== 3 && true,
                  style: {
                    base: {
                      "::placeholder": {
                        color: "#D3D4D9",
                        fontSize: "16px", // Customize the color here
                      },
                    },
                  },
                }}
              />
              <input
                disabled={stage !== 3 && "true"}
                type="number"
                className="outline-none border-solid border-[1px] border-[#D3D4D9] rounded-[5px] h-[50px]  placeholder:text-[16px] text-[16px] font-[400] leading-normal   placeholder:text-[#D3D4D9] pl-[18px] w-[163px] disabled:bg-white"
                placeholder="ZIP CODE"
              />
            </div>
          </div>

          <div className="pb-[12px]">
            <CustomButton
              text="Upgrade account"
              background={stage == 3 ? "bg-[#3490EC]" : "bg-[#D3D4D9]"}
              onClick={handlePayment}
            />
          </div>
        </form>
        <div className="flex items-center justify-center  sm:pb-[74px] pb-[71px]">
          <p className="Montserrat400 text-[12px] font-[400] leading-normal pb-[2px] text-[#D3D4D9]">
            powered by
          </p>
          <img src="/img/stripe.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Payment;
