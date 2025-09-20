import Image, { StaticImageData } from "next/image";
import React from "react";

interface ButtonProps {
  title: string;
  id?: number;
  bgColor?: string;
  padding?: string;
  flex?: string;
  icon?: StaticImageData;
  type?: string;
  path?: string;
  size?: string;
  handleFunction?: (id: number) => void;
}

const Button = ({
  title,
  bgColor,
  padding,
  flex,
  icon,
  type,
  path,
  id,
  handleFunction,
}: ButtonProps) => {
  return (
    <div className="btn-container flex justify-center">
      <button
        //@ts-ignore
        type={type}
        className={`${bgColor} ${padding}`}
        onClick={() => handleFunction ? handleFunction(id ? id : 0) : console.log('button')}
      >
        {title}{" "}
        {icon ? (
          <Image src={icon} alt={title} className="w-[15px] ml-3" />
        ) : null}
      </button>
    </div>
  );
};

export default Button;
