import React, { useState } from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { BsCheck } from "react-icons/bs";

import cartIcon from "@/common/images/shopping-cart.png";
import CartDetails from "./CartDetails";

interface StickCartProps {
  style: string;
}

const StickyCart = ({ style }: StickCartProps) => {
  const [orderType, setOrderType] = useState("delivery");
  return (
    <div className={style}>
      <div className="cart-wrapper p-3 bg-white shadow-[0_0_16px_#00000029]">
        <div className="cart-header flex items-center justify-between px-2 pb-2 border-b-[1px] border-b-[#000]">
          <h3 className="text-[20px] uppercase">basket</h3>
          <button className="cart-btn">
            <Image src={cartIcon} alt="cart image" className="w-[35px]" />
          </button>
        </div>
        <div className="cart-body py-3">
          <p className="text-sm font-bold flex items-center">
            <GoDotFill className="text-primary" />
            Min {orderType === "delivery" ? "delivery" : "takeaway"} amount
            should be £{orderType === "delivery" ? "19" : "1"}
          </p>
          <p className="text-sm pl-[14px] mt-3">
            Please select checkout method.
          </p>
          <div className="select-type flex items-center justify-between my-3">
            <div className="delivery flex-1 mr-3">
              <button
                className="text-white bg-primary w-full flex items-center justify-between px-3 py-2"
                onClick={() => setOrderType("delivery")}
              >
                DELIVERY
                {orderType === "delivery" ? (
                  <span className="bg-secondary flex items-center justify-center rounded-full">
                    <BsCheck className="text-[25px]" />
                  </span>
                ) : null}
              </button>
            </div>
            <div className="collection flex-1">
              <button
                className="text-white bg-primary w-full flex items-center justify-between px-3 py-2 mr-3"
                onClick={() => setOrderType("collection")}
              >
                COLLECTION
                {orderType === "collection" ? (
                  <span className="bg-secondary flex items-center justify-center rounded-full">
                    <BsCheck className="text-[25px]" />
                  </span>
                ) : null}
              </button>
            </div>
          </div>
        </div>
        <CartDetails />
        <div className="card-footer">
          <div className="total flex items-center justify-between">
            <h3 className="text-2xl font-bold mb-2">Total</h3>
            <h2 className="text-2xl text-primary font-bold">£0.00</h2>
          </div>
          <div className="btn-container">
            <button className="checkout-btn text-white bg-primary p-3 w-full">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCart;
