import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "../Button/Button";
import { fixedPrice } from "@/common/libs/fixedPrice";
import { useRouter } from 'next/router';

interface itemCardProps {
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
  handleFunction: (id: number) => void;
}

const ItemCard = ({
  title,
  description,
  price,
  image,
  btnTitle,
  bgColor,
  padding,
  icon,
  textAlign,
  slug,
  imageRadius,
  contentRadius,
  handleFunction,
  id,
}: itemCardProps) => {
  let amount = fixedPrice(price);
  const router = useRouter();
  // const handleButtonClick = () => {
    
  //   router.push(`/product?slug=${slug}`);
  // };
  return (
    <div className="single-item-container h-full flex flex-col justify-between">
      <div className={`item-image ${imageRadius}`}>
        <Image src={image} alt={title} className="w-full" />
      </div>
      <div
        className={`head w-full mx-auto p-3 bg-white shadow-[0_3px_6px_#00000029] ${contentRadius} flex flex-col justify-between h-full`}
      >
        <h3 className={`text-sm font-bold ${textAlign}`}>{title}</h3>
        <p>{description}</p>
        <div className="price text-center mt-2">
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

export default ItemCard;
