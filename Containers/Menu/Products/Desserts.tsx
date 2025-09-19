import React from "react";
import TopPriceCardItem from "@/common/Components/Cards/TopPriceCardItem";
import { useRouter } from "next/router";

import dessert1 from "@/common/images/dessert.png";
import circlePlus from "@/common/images/circle-plus.png";

interface DessertsProps {
  singleItem: any;
}

const Desserts = ({ singleItem }: DessertsProps) => {
  const { push } = useRouter();
  const handleSelectItem = (id: number) => {
    // console.log("id", id);
    let findIndex = singleItem?.products.find((item: any) => item.id === id);
    // console.log("findIndex", findIndex);
    push(`/product?slug=${findIndex?.slug}`);
  };
  return (
    <div id={singleItem.slug} className={`${singleItem.slug}-container mt-10`}>
      <div className="title">
        <h3 className="text-5xl text-primary font-[BebasKai] mb-3">
          {singleItem.title}
        </h3>
      </div>
      <div className="items-container grid grid-cols-4 gap-3">
        {singleItem?.products.map((item: any) => {
          return (
            <TopPriceCardItem
              key={item.id}
              id={item.id}
              image={dessert1}
              title={item.title}
              description={item.description}
              price={item.price_takeaway}
              btnTitle="Get it Now"
              bgColor="bg-secondary text-sm text-white flex items-center justify-center"
              padding="rounded-sm py-1 px-6 mt-3"
              icon={circlePlus}
              textAlign="text-center text-secondary"
              priceTextColor="text-[#FFDB58] absolute top-0"
              imageRadius="rounded-t-sm"
              contentRadius="rounded-b-sm"
              handleFunction={handleSelectItem}
            />
          );
        })}
        {/* <div className="image flex items-center ml-2">
          <Image src={deliverMan} alt="chief image" className="w-full" />
        </div> */}
      </div>
    </div>
  );
};

export default Desserts;
