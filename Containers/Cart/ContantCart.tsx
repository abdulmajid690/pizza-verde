import React from "react";
import Image from "next/image";
import CartPizza from "../../common/images/cart_pizza.png"
const ContantCart = () => {
  return (
    <div className="flex-[0.9] pr-16">
      
      <div className="basket mb-2">
        <h1 className="text-4xl text-primary font-medium font-[BebasKai]">BASKET</h1>
        <p className="text-sm font-bold ">
          If you would like collection at a specific time please use the order
          notes box to let us know.
        </p>
      </div>
      <div className="CLICK_COLLECT mb-5">
        <h1 className="text-3xl text-primary font-medium font-[BebasKai]">CLICK & COLLECT</h1>
        <p className="pb-4">
          We automatically apply a 10% discount code to all online Click &
          Collect orders and you will see your savings appear on the next page.
          Orders are ready to collect approx. 20 minutes after order. 
        </p>
        <p  className="pb-4">We
          recommend creating a customer account when you checkout so that you
          can access your previous meal orders and receive our latest offers.
          </p>
        <p  className="pb-4">Please contact us at the store on 01293 550 470 if you have any
          questions or queries about ordering.</p>
      </div>
      <div className="CONDITION mb-5">
        <h1 className="text-3xl text-primary font-medium font-[BebasKai]">TERMS & CONDITIONS</h1>
        <p>
        Please check our terms and conditions of sale and privacy statement via the links below.
        </p>
      </div>
      <div className="pizza">
      <Image
          src={CartPizza}
          alt=""
          className="mx-auto md:mt-10 mt-5 h-[440px]"
        />
      </div>
    </div>
  );
};

export default ContantCart;
