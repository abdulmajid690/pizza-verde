import React from "react";
import ContantCart from "./ContantCart";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
const Cart = () => {
  return (
    <div className="register-page max-w-[1280px] mx-auto flex md:flex-row flex-col py-10 relative md:px-10 px-5">
      <ContantCart />

      <div className="cart flex-1">
        <div className="cart-wrapper  p-4  bg-white shadow-[0_0_16px_#00000029] rounded ">
          <div className="head flex justify-end py-2 border-b-2 border-secondary  ">
            <div className="wrapper w-[63%] flex justify-between">
              <p className=" text-primary font-semibold text-center border-r-2 border-secondary flex-1">
                Price
              </p>
              <p className=" text-primary font-semibold text-center border-r-2 border-secondary flex-1">
                Quantity
              </p>
              <p className=" text-primary font-semibold text-center flex-1">
                Sub Total
              </p>
            </div>
          </div>
          <div className="wrapper flex py-6  border-b-2 border-secondary">
            <div className="product_details  flex-[1] ">
              <div className="flex items-center justify-between">
                <p className="text-start font-semibold">1x :</p>
                <p className=" text-end text-sm">Any 2 Large (15") Pizzas </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-start text-sm font-semibold">First Pizza:</p>
                <p className=" text-end text-sm"> Super Pepperoni</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-start text-sm font-semibold"> Crust: </p>
                <p className=" text-end text-sm"> Thin Crust </p>
              </div>
              <div className="flex items-center justify-between ">
                <p className="text-start text-sm font-semibold">Addons:</p>
                <p className=" text-end text-sm"> 1x Chargrilled Chicken</p>
              </div>
              <div className="flex items-center justify-between mt-9">
                <p className="text-start text-sm font-semibold">
                  {" "}
                  Second Pizza:
                </p>
                <p className=" text-end text-sm"> Meatball pizza </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-start text-sm font-semibold">Crust: </p>
                <p className=" text-end text-sm"> Thin Crust</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-start text-sm font-semibold">Addons:</p>
                <p className=" text-end text-sm"> BBQ Chicken</p>
              </div>
            </div>
            <div className="Price_qtn w-[63%] ">
              <div className="pri flex justify-between items-center">
                <div className="price flex-1 text-center">
                  <p className="text-[16px] font-bold italic">£29.50</p>
                </div>
                <div className="quantity flex items-center justify-center flex-1 text-center italic">
                  <p className="text-sm font-light mr-2">Qty</p>
                  <div className="btn-container flex items-center">
                    <button className="bg-primary px-1 py-1">
                      <FaPlus className="text-white" />
                    </button>
                    <p className="text-sm px-[10px] py-[2px] shadow-[0_0_3px_#0000004A]">
                      1
                    </p>
                    <button className="bg-secondary px-1 py-1 pointer-events-none">
                      <FaMinus className="text-white" />
                    </button>
                  </div>
                </div>
                <div className="price flex-1 text-center">
                  <p className="text-[16px] font-bold italic">£29.50</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sub_total flex justify-end py-6">
            <div className="wrapper w-[40%]">
              <div className="flex items-center justify-between ">
                <p className=" text-sm font-semibold text-primary text-center">
                  Sub Total{" "}
                </p>
                <p className=" font-semibold text-sm"> £34.50</p>
              </div>
              <div className="flex items-center justify-between ">
                <p className=" text-sm font-semibold text-primary text-center">
                  {" "}
                  Voucher{" "}
                </p>
                <p className=" font-semibold text-sm"> £34.50</p>
              </div>
              <div className="flex items-center justify-between ">
                <p className=" text-sm font-semibold text-primary text-center">
                  {" "}
                  Delivery{" "}
                </p>
                <p className=" font-semibold text-sm"> £100.00</p>
              </div>
              <div className="flex items-center justify-between ">
                <p className=" text-sm font-semibold text-primary text-center">
                  {" "}
                  Total{" "}
                </p>
                <p className=" font-semibold text-sm"> £134.50</p>
              </div>
            </div>
          </div>
          <div className="btns">
            <div className="btn-center w-[80%] mx-auto">
              <div className="del-coll  flex">
                <button className="text-white text-sm mr-2 bg-primary w-full flex items-center justify-between px-3 py-2">
                  DELIVERY{" "}
                  <span className="bg-secondary flex items-center justify-center rounded-full">
                    <BsCheck className="text-[25px]" />
                  </span>
                </button>
                <button className="text-white text-sm  bg-primary w-full flex items-center justify-between px-3 py-2">
                  COLLECTION
                </button>
              </div>
              <div className="vocher bg-primary flex my-2">
                <p className="flex-1 text-center grid place-items-center text-white text-sm px-3">VOUCHER</p>
                <input
              type="text"
              placeholder=""
              className={
                "w-full h-[50px] text-[18px] text-[#FAFAFA] my-2 text-center flex-4 bg-[#005F1B] pl-2 opacity-[0.9] pr-[50px]"
              }
              
            />
            <p className=" flex-1 text-center grid place-items-center text-white text-sm px-3">REDEEM</p>
              </div>
              <div className="procced text-center ">
                <button className="text-white text-sm my-2 font-semibold w-full bg-secondary  px-3 py-5">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
