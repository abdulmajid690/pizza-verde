import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { GetSelectedItem } from "@/common/libs/getSelectedItem";
import {
  selectProduct,
  singleItem,
  selectedItem,
} from "@/redux/singleProductSlice";
// import Image, { StaticImageData } from "next/image";

interface ProductProps {
  //   image: StaticImageData;
  tier: any;
  type: string;
  products: any;
  number: string;
  index: number;
  setNoOfFreeAddons: (value: number) => void;
}

const Product = ({
  tier,
  type,
  number,
  products,
  index,
  setNoOfFreeAddons,
}: ProductProps) => {
  const dispatch = useDispatch();
  const productArray = useSelector(
    (state: any) => state.product.singleItem.tiers
  );

  const handleSelectProduct = (i: string) => {
    const singleProduct = products[i];
    setNoOfFreeAddons(parseFloat(singleProduct?.no_of_free_addons));
    const product = {
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
      selected: { ...singleProduct },
    };
    dispatch(selectProduct(product));
  };

  return (
    <div className="w-full flex items-center border-b-[1px] border-primary px-5 py-2">
      <span className="index text-sm text-primary font-bold mr-2">
        {number}
      </span>
      <select
        name=""
        className="w-full text-sm font-light appearance-none"
        onChange={(e) => handleSelectProduct(e.target.value)}
      >
        <option>{tier.title}</option>
        {products?.map((product: any, index: number) => {
          return (
            <option key={index} value={index}>
              {product.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Product;
