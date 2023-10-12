"use client";
import { createContext, useState } from "react";

const MyContext = createContext();
export function MyProvider({ children }) {
  const [userData, setuserData] = useState(null);
  const [stripeData, setstripeData] = useState(null);
  const [stage, setstage] = useState(1);
  const [detailsToggle, setdetailsToggle] = useState(0);
  return (
    <MyContext.Provider
      value={{
        userData,
        setuserData,
        stripeData,
        setstripeData,
        stage,
        setstage,
        detailsToggle,
        setdetailsToggle,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
