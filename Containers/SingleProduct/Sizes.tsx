import React from "react";
// import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";
import { selectSize, selectProduct } from "@/redux/singleProductSlice";
import showSizePrice from "@/common/libs/showSizePrice";
import { fixedPrice } from "@/common/libs/fixedPrice";

interface SizesProps {
  tier: any;
  type: string;
  products: any;
  index: number;
  //   image: StaticImageData;
  //   showSingleOptionPrice: string;
}

const Sizes = ({ tier, type, products, index }: SizesProps) => {
  let sizePrice = showSizePrice(type, products);
  const dispatch = useDispatch();

  // console.log(type, index);

  const handleSelectByType = (index: any) => {
    let singleSize = products[index];
    let sizeObj = {
      index: index,
      id: tier.id,
      title: tier.title,
      basket_title: tier.basket_title,
      free_items: tier.free_items,
      max_items: tier.max_items,
      type: tier.type,
      type_id: tier.type_id,
      classification: tier.classification,
      classification_id: tier.classification_id,
      tag: tier.tag,
      tag_id: tier.tag_id,
      priority: tier.priority,
      required: tier.required,
      selected: { ...singleSize },
    };
    dispatch(selectProduct(sizeObj));
  };

  return (
    <div className="w-full flex items-center border-b-[1px] border-primary px-[50px] py-2">
      <select
        name=""
        className="w-full text-sm font-light appearance-none"
        onChange={(e) => handleSelectByType(e.target.value)}
      >
        <option>{tier.title}</option>
        {products?.map((product: any, index: number) => {
          let findAmountByIndex = sizePrice[index].toString();
          let fixedAmount = fixedPrice(findAmountByIndex);
          return (
            <option key={index} value={index}>
              {product.title} {`£${parseFloat(fixedAmount).toFixed(1)}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Sizes;
