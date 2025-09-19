import React from "react";
import Link from "next/link";
import { fixedPrice } from "@/common/libs/fixedPrice";

const Meals = () => {
  let mealbox1Price = fixedPrice(3699);
  let mealbox2Price = fixedPrice(2999);
  let mealbox3Price = fixedPrice(2299);
  let mealbox4Price = fixedPrice(2399);

  return (
    <section className="container max-w-[1280px] mx-auto px-4">
      <h2 className="section-title-new">Meal Boxes</h2>
      <div className="meal-boxes-new">
        <div className="meal-card-new">
          <div className="meal-img-new">
            <i className="fas fa-utensils"></i>
          </div>
          <div className="meal-content-new">
            <h3>Family Feast Box</h3>
            <p>2 large pizzas, garlic bread, chicken wings, and 1.5L drink</p>
            <div className="meal-price-new">{mealbox1Price}</div>
            <Link href="/product/happy-family-meal" className="btn-new">
              Get it Now
            </Link>
          </div>
        </div>
        <div className="meal-card-new">
          <div className="meal-img-new">
            <i className="fas fa-heart"></i>
          </div>
          <div className="meal-content-new">
            <h3>Date Night Special</h3>
            <p>1 medium pizza, garlic bread, dessert, and two drinks</p>
            <div className="meal-price-new">{mealbox2Price}</div>
            <Link href="/product/seasonal-offer" className="btn-new">
              Get it Now
            </Link>
          </div>
        </div>
        <div className="meal-card-new">
          <div className="meal-img-new">
            <i className="fas fa-users"></i>
          </div>
          <div className="meal-content-new">
            <h3>Party Pack</h3>
            <p>4 large pizzas, 20 wings, garlic bread, and 2L drink</p>
            <div className="meal-price-new">{mealbox3Price}</div>
            <Link href="/product/meal-box-3" className="btn-new">
              Get it Now
            </Link>
          </div>
        </div>
        <div className="meal-card-new">
          <div className="meal-img-new">
            <i className="fas fa-user"></i>
          </div>
          <div className="meal-content-new">
            <h3>Solo Dinner</h3>
            <p>1 personal pizza, side, and drink - perfect for one</p>
            <div className="meal-price-new">{mealbox4Price}</div>
            <Link href="/product/meal-box-4" className="btn-new">
              Get it Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meals;
