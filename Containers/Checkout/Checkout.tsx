import Login from "@/common/Components/Login/Login";
import React from "react";
import Tabs from "./Tabs";
import RegisterAndGuest from "./RegisterAndGuest";
import AddressDetails from "./AddressDetails";

const Checkout = () => {
  return (
    <div className="checkout-container max-w-[1280px] mx-auto md:px-10 px-5 md:py-10 py-5 relative">
      <div className="md:w-[50%] w-full">
        {" "}
        <Tabs />
      </div>
      {/* <div className="flex items-center">
        <div className="flex-1">
          <Login />
        </div>
        <div className="flex-1">
          <RegisterAndGuest />
        </div>
      </div> */}
      <AddressDetails />
    </div>
  );
};

export default Checkout;
