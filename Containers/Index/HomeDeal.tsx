import React from "react";
import Link from "next/link";
import { fixedPrice } from "@/common/libs/fixedPrice";
import Image from "next/image";

import pizza1 from '../../common/images/p-1.png';
import pizza2 from '../../common/images/p-2.png';
import pizza3 from '../../common/images/p-3.png';
import pizza4 from '../../common/images/p-4.png';

const HomeDeal = () => {
  const largePizzaPrice = fixedPrice(2499);
  const mediumPizzaPrice = fixedPrice(2999);
  const lunchPrice = fixedPrice(1299);

  return (
    <section className="container max-w-[1280px] mx-auto px-4">
      <h2 className="section-title-new">Today's Special Deals</h2>
      <div className="deals-new">
        <div className="deal-card-new">
          <div className="deal-badge">Popular</div>
          <div className="deal-img-new">
            <Image src={pizza1} className="w-[65%]" alt="" />
          </div>
          <div className="deal-content-new">
            <h3>Large Pizza Feast</h3>
            <p>
              One large pizza with up to 3 toppings, garlic bread, and a 1.5L
              drink
            </p>
            <div className="deal-price-new">
              {largePizzaPrice} <span className="original">£32.99</span>
            </div>
            <Link href="/menu" className="btn-new btn-outline-new">
              Add to Order
            </Link>
          </div>
        </div>
        <div className="deal-card-new">
          <div className="deal-badge">New</div>
          <div className="deal-img-new">
            <Image src={pizza3} className="w-[65%]" alt="" />
          </div>
          <div className="deal-content-new">
            <h3>Medium Family Deal</h3>
            <p>
              Two medium pizzas with 2 toppings each and a side of your choice
            </p>
            <div className="deal-price-new">
              {mediumPizzaPrice} <span className="original">£38.99</span>
            </div>
            <Link href="/menu" className="btn-new btn-outline-new">
              Add to Order
            </Link>
          </div>
        </div>
        <div className="deal-card-new">
          <div className="deal-badge">Value</div>
          <div className="deal-img-new">
            <Image src={pizza4} className="w-[65%]" alt="" />
          </div>
          <div className="deal-content-new">
            <h3>Personal Lunch Box</h3>
            <p>Personal pizza, side salad, and a drink - perfect for lunch</p>
            <div className="deal-price-new">
              {lunchPrice} <span className="original">£16.99</span>
            </div>
            <Link href="/menu" className="btn-new btn-outline-new">
              Add to Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDeal;
