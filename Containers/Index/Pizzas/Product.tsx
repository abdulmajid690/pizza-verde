import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "@/common/Components/Button/Button";
import { useRouter } from 'next/router';
interface ProductProps {
  image: StaticImageData;
  title: string;
  price: string;
  slug: string;
}

const Product = ({ image, title, price, slug }: ProductProps) => {
  console.log("slug",slug);
  const router = useRouter();

  const handleButtonClick = () => {
   
    router.push(`/product?slug=${slug}`);
  };
  return (
    <div className="single-product px-2 relative">
      <div className="product-image p-5">
        <Image src={image} alt="single product image" className="w-[90%]" />
      </div>
      <div className="title-line absolute w-[70%] mx-auto  bottom-[-11px] left-0 right-0 z-[2]">
  <h3 className="text-1xl text-secondary text-center font-bold italic">
    {title}
  </h3>
</div>
      <div className="price border border-secondary  border-t-0 flex justify-center w-[70%] mx-auto pt-4 pb-2 px-3 relative z-[1]">
        <h4 className="text-4xl text-secondary font-bold italic">£ {price}</h4>
      </div>
      <Button
        title="Get it Now"
        bgColor="bg-primary text-[18px] text-white rounded-sm mt-4"
        padding="py-2 px-7"
        handleFunction={handleButtonClick}
      />
    </div>
  );
};

export default Product;
