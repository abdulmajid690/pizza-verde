import React from "react";
import Image, { StaticImageData } from "next/image";
import showOptionPrice from "@/common/libs/showOptionPrice";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, selectedSize } from "@/redux/singleProductSlice";
import { fixedPrice } from "@/common/libs/fixedPrice";

interface OptionsProps {
  tier: any;
  type: string;
  products: any;
  image: StaticImageData;
  index: number;
}

const Options = ({ tier, type, image, products, index }: OptionsProps) => {
  const dispatch = useDispatch();
  const size = useSelector(selectedSize);
  let optionsPrice = showOptionPrice(type, products);

  const handleSelectByType = (i: any) => {
    let singleOption = products[i];
    const option = {
      index,
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
      selected: { ...singleOption },
    };
    dispatch(selectProduct(option));
  };

  return (
    <div className="w-full flex items-center border-b-[1px] border-primary px-5 py-2">
      {image ? (
        <Image
          // @ts-ignore
          src={image}
          alt="black option"
          className="w-[17px] h-[17px] mr-3"
        />
      ) : null}
      <select
        name=""
        className="w-full text-sm font-light appearance-none"
        onChange={(e) => handleSelectByType(e.target.value)}
      >
        <option>{tier.title}</option>
        {products?.map((product: any, index: number) => {
          let findAmountByIndex;
          let fixedAmount;
          if (product.price?.length > 1) {
            findAmountByIndex = optionsPrice[index]?.toString();
            fixedAmount = fixedPrice(findAmountByIndex);
          } else {
            let price = product.price
              ?.map((p: any) => p.price_takeaway)
              .join("");
            findAmountByIndex = price;
            fixedAmount = fixedPrice(findAmountByIndex);
          }
          return (
            <option key={index} value={index}>
              {product.title}
              {fixedAmount === ".0"
                ? null
                : `£${parseFloat(fixedAmount).toFixed(1)}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Options;
