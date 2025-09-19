import React from "react";
import MealDeal from "./MealDeal";
import PizzaDeals from "./PizzaDeals";
import ItalianPizzas from "./ItalianPizzas";
import BurgerAndChicken from "./BurgerAndChicken";
import Pizzas from "./Pizzas";
import Sides from "./Sides";
import Pastas from "./Pastas";
import Salads from "./Salads";
import Desserts from "./Desserts";
import PremiumSides from "./PremiumSides";
import IceCreams from "./IceCreams";
import Dips from "./Dips";
import Drinks from "./Drinks";

interface ProductsProps {
  menuItems: any;
}

const Products = ({ menuItems }: ProductsProps) => {
  return (
    <div className="products-container small:h-[800px] h-full overflow-y-scroll flex-[2_1_0%] pt-5">
      {menuItems?.map((singleMenuItem: any) => {
        switch (singleMenuItem?.title) {
          case "Meal Deal":
            return <MealDeal singleItem={singleMenuItem} />;
          case "Pizza Deals":
            return <PizzaDeals singleItem={singleMenuItem} />;
          case "Italian Pizzas":
            return <ItalianPizzas singleItem={singleMenuItem} />;
          case "Burgers & Chicken Wrap Box":
            return <BurgerAndChicken singleItem={singleMenuItem} />;
          case "Pizzas":
            return <Pizzas singleItem={singleMenuItem} />;
          case "Sides":
            return <Sides singleItem={singleMenuItem} />;
          case "Pastas":
            return <Pastas singleItem={singleMenuItem} />;
          case "Salads":
            return <Salads singleItem={singleMenuItem} />;
          case "Desserts":
            return <Desserts singleItem={singleMenuItem} />;
          case "Dips":
            return <Dips singleItem={singleMenuItem} />;
          case "Drinks":
            return <Drinks singleItem={singleMenuItem} />;
          case "Premium Sides":
            return <PremiumSides singleItem={singleMenuItem} />;
          case "Ice Creams":
            return <IceCreams singleItem={singleMenuItem} />;
        }
      })}
    </div>
  );
};

export default Products;
