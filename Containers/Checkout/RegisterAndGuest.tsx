import React from "react";
import { RxDotFilled } from "react-icons/rx";

const RegisterAndGuest = () => {
  return (
    <div className="register-and-guest-container">
      <div className="title md:px-10 px-5">
        <h3 className="text-primary font-bold">CONTINUE TO CHECKOUT</h3>
      </div>
      <div className="black-underline w-full h-[1px] bg-black mt-2 mx-5"></div>
      <div className="content mt-5 md:px-10 px-5">
        <p>
          Continue placing your order and create an account for future
          convenience!
        </p>
        <p className="mt-5">Registering with us allows you to have:</p>
        <div className="flex items-center md:px-10 px-5 py-3">
          <RxDotFilled className="text-primary text-[30px]" />
          <p className="text-[18px] ml-3">Fast and easy checkout</p>
        </div>
        <div className="flex items-center md:px-10 px-5 ">
          <RxDotFilled className="text-primary text-[30px]" />
          <p className="text-[18px] ml-3">
            Easy access to your order history and status
          </p>
        </div>
        <div className="btn-container mt-5 flex items-center justify-center gap-x-5">
          <button className="bg-primary text-white py-3 px-2 rounded-[3px] shadow-[0px_3px_6px_#00000029]">
            CONTINUE & REGISTER
          </button>
          <button className="bg-white text-[#060606] py-3 px-2 rounded-[3px] shadow-[0px_3px_6px_#00000029]">
            CONTINUE AS GUEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterAndGuest;
