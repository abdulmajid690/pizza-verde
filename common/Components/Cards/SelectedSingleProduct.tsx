import React from "react";
import Image, { StaticImageData } from "next/image";

interface SelectedSingleProductProps {
  title: string;
  price?: string;
  image: StaticImageData;
  slug?: string;
  textAlign?: string;
  imageRadius?: string;
  contentRadius?: string;
  style?: string;
}

const SelectedSingleProduct = ({
  title,
  price,
  image,
  textAlign,
  imageRadius,
  contentRadius,
  style,
}: SelectedSingleProductProps) => {
  return (
    <div className={style}>
      <div className={`item-image ${imageRadius}`}>
        <Image src={image} alt={title} className="w-full" />
      </div>
      <div
        className={`head w-full mx-auto p-3 bg-white shadow-[0_3px_6px_#00000029] ${contentRadius}`}
      >
        <h3 className={textAlign}>{title}</h3>
        <div className="price flex items-center justify-between mt-2">
          <h4 className="text-[18px]">Total:</h4>
          <h4 className="text-[18px] italic font-bold">£ {price}</h4>
        </div>
      </div>
    </div>
  );
};

export default SelectedSingleProduct;
