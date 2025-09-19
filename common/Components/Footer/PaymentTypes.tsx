import React from "react";
import Image from "next/image";
import shadowPizza from "@/common/images/shadow-pizza.png";
import cards from "@/common/images/cards.png";

const PaymentTypes = () => {
  return (
    <div className="payment-types flex-1 flex flex-col items-end">
      <div className="pizza-image">
        <Image src={shadowPizza} alt="shadow pizza" className="w-full" />
      </div>
      <div className="card-images-container mb-3">
        <Image src={cards} alt="card images" className="w-[70%] ml-auto" />
      </div>
      <p className="text-white text-[16px]">
        Website Designed and Developed by Binary Ops Pvt Ltd.
      </p>
    </div>
  );
};

export default PaymentTypes;
