import React from "react";
import Link from "next/link";

interface InfoBtnsProps {
  menuItems: any;
}

const InfoBtns = ({ menuItems }: InfoBtnsProps) => {
  return (
    <div className="info-btn-container grid grid-cols-5 gap-x-[20px]">
      {menuItems?.map((item: any, index: number) => {
        const { slug, title } = item;
        return (
          <Link
            key={index}
            href={`#${slug}`}
            className="flex items-center justify-center text-[18px] text-center text-white capitalize bg-primary rounded-sm py-2 px-5 mb-3"
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default InfoBtns;
