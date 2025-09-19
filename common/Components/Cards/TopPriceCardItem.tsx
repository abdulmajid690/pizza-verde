import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "../Button/Button";
import { fixedPrice } from "@/common/libs/fixedPrice";

interface TopPriceCardItemProps {
  title: string;
  id: number;
  description?: string;
  price: number;
  image: StaticImageData;
  btnTitle: string;
  slug?: string;
  bgColor?: string;
  padding?: string;
  icon?: StaticImageData;
  textAlign: string;
  imageRadius: string;
  contentRadius: string;
  priceTextColor: string;
  handleFunction: (id: number) => void;
}

const TopPriceCardItem = ({
  title,
  id,
  description,
  price,
  image,
  btnTitle,
  bgColor,
  padding,
  icon,
  textAlign,
  imageRadius,
  contentRadius,
  priceTextColor,
  handleFunction,
}: TopPriceCardItemProps) => {
  let amount = fixedPrice(price);
  return (
    <div className="single-item-container h-full flex flex-col justify-between relative z-[1]">
      <div className={`item-image ${imageRadius}`}>
        <Image src={image} alt={title} className="w-full" />
      </div>
      <div
        className={`head w-full mx-auto p-3 bg-white shadow-[0_3px_6px_#00000029] ${contentRadius} flex flex-col justify-between h-full`}
      >
        <h3 className={`text-sm font-bold ${textAlign}`}>{title}</h3>
        <p className="text-[12px] text-center my-2">{description}</p>
        <div className={`price text-center mt-2  ${priceTextColor}`}>
          <h4 className="text-[18px] italic font-semibold">£ {amount}</h4>
        </div>
        <Button
          title={btnTitle}
          bgColor={bgColor}
          padding={padding}
          icon={icon}
          id={id}
          handleFunction={handleFunction}
        />
      </div>
    </div>
  );
};

export default TopPriceCardItem;
