import React from "react";
import Image from "next/image";
import SeparateBtnCard from "@/common/Components/Cards/SeparateBtnCard";
import { useRouter } from "next/router";

import pizza1 from "@/common/images/Pizzas-01.png";
import circlePlus from "@/common/images/circle-plus.png";

interface PizzasProps {
  singleItem: any;
}

const Pizzas = ({ singleItem }: PizzasProps) => {
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
      <div className="items-container grid grid-cols-5 gap-3">
        {singleItem?.products.map((item: any) => {
          return (
            <SeparateBtnCard
              key={item.id}
              id={item.id}
              image={pizza1}
              description={item.description}
              title={item.title}
              price={item.price_takeaway}
              btnTitle="Get it Now"
              bgColor="bg-primary text-[12px] text-white flex items-center justify-center w-[85%] mx-auto"
              padding="rounded-sm py-1 px-3 mt-3"
              icon={circlePlus}
              textAlign="text-white text-center flex-1"
              imageRadius="rounded-t-md py-2 bg-secondary h-full flex flex-col items-center justify-between"
              handleFunction={handleSelectItem}
            />
          );
        })}
        {/* <div className="image flex items-center">
          <Image src={chief} alt="chief image" className="w-full" />
        </div> */}
      </div>
    </div>
  );
};

export default Pizzas;
