import React from "react";
import Image from "next/image";
import ItemCard from "@/common/Components/Cards/ItemCard";
import { useRouter } from "next/router";

import mealbox1 from "@/common/images/meal-box-1.png";
import circlePlus from "@/common/images/circle-plus.png";

interface MealDealProps {
  singleItem: any;
}

const MealDeal = ({ singleItem }: MealDealProps) => {
  // console.log("singleitem",singleItem)
  const { push } = useRouter();
  const handleSelectItem = (id: number) => {
    // console.log("id", id);
    let findIndex = singleItem?.products.find((item: any) => item.id === id);
    // console.log("findIndex", findIndex);
    push(`/product?slug=${findIndex?.slug}`);
  };
  return (
    <div id={singleItem.slug} className={`${singleItem.slug}-container`}>
      <div className="title">
        <h3 className="text-5xl text-primary font-[BebasKai] mb-3">
          {singleItem.title}
        </h3>
      </div>
      <div className="items-container grid grid-cols-4 gap-3">
        {singleItem?.products.map((item: any) => {
          return (
            <ItemCard
              key={item.id}
              id={item.id}
              image={mealbox1}
              title={item.title}
              price={item.price_takeaway}
              btnTitle="Get it Now"
              bgColor="bg-primary text-sm text-white flex items-center justify-center"
              padding="rounded-sm py-1 px-6 mt-3"
              icon={circlePlus}
              textAlign="text-center text-primary"
              imageRadius="rounded-t-sm"
              contentRadius="rounded-b-sm"
              handleFunction={handleSelectItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MealDeal;
