import React from "react";
import StickyCart from "../../common/Components/StickyCart/StickyCart";
import MealDeal from "../Menu/Products/MealDeal";
import PizzaDeals from "../Menu/Products/PizzaDeals";
import ItalianPizzas from "../Menu/Products/ItalianPizzas";
import BurgerAndChicken from "../Menu/Products/BurgerAndChicken";
import Pizzas from "../Menu/Products/Pizzas";
import Sides from "../Menu/Products/Sides";
import Pastas from "../Menu/Products/Pastas";
import Salads from "../Menu/Products/Salads";
import Desserts from "../Menu/Products/Desserts";
import PremiumSides from "../Menu/Products/PremiumSides";
import IceCreams from "../Menu/Products/IceCreams";
import Dips from "../Menu/Products/Dips";
import Drinks from "../Menu/Products/Drinks";
import ErrorPage from "@/common/Components/ErrorPage/ErrorPage";
type SearchProps = {
  menuItem: any;
  searchItem: string | string[] | undefined;
  singleMenuItem?: any;
};
const Search: React.FC<SearchProps> = ({ menuItem, searchItem }) => {
  console.log("Received menuItem in Search:", menuItem);
  //@ts-ignore
  const filteredItems = menuItem?.filter((singleMenuItem) => singleMenuItem?.title?.toLowerCase().includes(searchItem.toLowerCase())
  );
  const showStickyCart = filteredItems?.length > 0;

  return (
    <div className="flex p-16">
      <div className="products-container small:h-[800px] h-full overflow-y-scroll flex-[2_1_0%] pt-5 px-10">
        <h1 className="text-4xl text-secondary font-semibold flex items-center ">
          Search results for :<p className="text-primary font-[BebasKai] text-5xl ml-2 font-normal capitalize">{searchItem}</p>
        </h1>
        <div className="products-container small:h-[800px] h-full overflow-y-scroll flex-[2_1_0%] pt-5">
          {filteredItems?.length > 0 ? (
            filteredItems.map((singleMenuItem: any) => (
              <div key={singleMenuItem.id}>
                {singleMenuItem.title === "Meal Deal" && (
                  <MealDeal singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Pizza Deals" && (
                  <PizzaDeals singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Italian Pizzas" && (
                  <ItalianPizzas singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Burgers & Chicken Wrap Box" && (
                  <BurgerAndChicken singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Pizzas" && (
                  <Pizzas singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Sides" && (
                  <Sides singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Pastas " && (
                  <Pastas singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Salads" && (
                  <Salads singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Desserts" && (
                  <Desserts singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Dips" && (
                  <Dips singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Drinks " && (
                  <Drinks singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Premium Sides" && (
                  <PremiumSides singleItem={singleMenuItem} />
                )}
                {singleMenuItem.title === "Ice Creams" && (
                  <IceCreams singleItem={singleMenuItem} />
                )}
              </div>
            ))
          ) : (

            <ErrorPage
              message="No items found"
              description="Sorry, we couldn't find any matching products."
            />
          )}
        </div>
      </div>
      {showStickyCart && (
        <div className="flex-1">
          <StickyCart style="" />
        </div>
      )}
    </div>
  );
};

export default Search;
