import React from "react";
import InfoBtns from "./InfoBtns";
import Products from "./Products/Products";
import StickyCart from "@/common/Components/StickyCart/StickyCart";
import { useSelector } from "react-redux";

const Items = () => {
  const menuItems = useSelector((state: any) => state.items.menuItems);
  return (
    <div className="menu-items-container max-w-[1280px] mx-auto relative px-10 py-10">
      <InfoBtns menuItems={menuItems} />
      <div className="wrapper flex justify-between">
        <Products menuItems={menuItems} />
        <StickyCart style="stick-cart-container flex-1 ml-5 mt-20" />
      </div>
    </div>
  );
};

export default Items;
