import React from "react";
import Button from "../Button/Button";
import Image, { StaticImageData } from "next/image";

interface SeparateBtnCardProps {
  id: number;
  title: string;
  description?: string;
  price?: string;
  image: StaticImageData;
  btnTitle: string;
  slug?: string;
  bgColor?: string;
  padding?: string;
  icon?: StaticImageData;
  textAlign: string;
  imageRadius: string;
  handleFunction: (id: number) => void;
}

const SeparateBtnCard = ({
  id,
  title,
  description,
  price,
  image,
  btnTitle,
  bgColor,
  padding,
  icon,
  textAlign,
  imageRadius,
  handleFunction,
}: SeparateBtnCardProps) => {
  return (
    <div className="separate-card-container h-full flex flex-col justify-between">
      <div className={`item-image ${imageRadius}`}>
        <h3 className={`text-sm font-bold ${textAlign}`}>{title}</h3>
        <Image
          src={image}
          alt={title}
          className="w-[90%] mx-auto mt-1 flex-1"
        />
      </div>
      <div className={`head w-full flex flex-col justify-between h-full`}>
        <div className="shadow-content p-3 bg-white shadow-[0_3px_6px_#00000029] h-full flex flex-col items-center justify-center">
          <p className="text-[12px] text-center">{description}</p>
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

export default SeparateBtnCard;
