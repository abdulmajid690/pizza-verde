import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetchLocalProducts from "@/common/libs/fetchMenu";
import Product from "./Product";
import smallPizza from "@/common/images/small-pizza.png";
import mediumPizza from "@/common/images/medium-pizza.png";
import largePizza from "@/common/images/large-pizza.png";
import { fixedPrice } from "@/common/libs/fixedPrice";

const Products = () => {
  const { pathname } = useRouter();
  let largePizzaPrice = fixedPrice(2950);
  let mediumPizzaPrice = fixedPrice(2450);
  let smallPizzaPrice = fixedPrice(1850);
  return (
    <section className="container max-w-[1280px] mx-auto px-4 mb-16">
      <h2 className="section-title-new">Popular Pizza Deals</h2>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <Product
          title='Any 2 Large (15") Pizzas'
          price={largePizzaPrice}
          slug="any-2-large-15-pizzas"
          image={largePizza}
        />
        <Product
          title='Any 2 Medium (12") Pizzas'
          price={mediumPizzaPrice}
          slug="any-2-medium-12-pizzas"
          image={mediumPizza}
        />
        <Product
          title='Any 2 Small (9") Pizzas'
          price={smallPizzaPrice}
          slug="any-2-small-9-pizzas"
          image={smallPizza}
        />
      </div>
    </section>
  );
};

export default Products;
