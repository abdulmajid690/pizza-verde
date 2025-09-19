import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/common/images/logo.png";
import whitePhone from "@/common/images/white-phone.png";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const LogoWrapper = () => {
  return (
    <div className="logo-wrapper flex-1">
      <div className="footer-logo">
        <Image src={logo} alt="logo" className="w-[400px]" />
      </div>
      <div className="details">
        <p className="text-[16px] text-white my-3">
          Italian Pizza 71 Gatwick Road. Crawley 9RD UK
        </p>
        <Link
          href="tel:01293550470"
          className="flex items-center text-[40px] font-[BebasKai] font-bold text-white mb-3"
        >
          <Image src={whitePhone} alt="phone image" className="w-[30px] mr-3 text-[20px]" />
          01293550470
        </Link>
        <div className="page-links flex items-center mt-10 mb-3">
          <p className="text-white text-[16px]">COOKIES |</p>
          <p className="text-white text-[16px] ml-[5px]">PRIVACY |</p>
          <p className="text-white text-[16px] ml-[5px]">TERMS & CONDITIONS</p>
        </div>
        <div className="address">
          <p className="text-white text-[16px] w-[90%] mr-auto mb-3">
            Italian Pizza 71 Gatwick Road. Crawley 9RD UK | 01293 550 470
            Company Reg No. 12730565
          </p>
          <div className="social-icons flex items-center">
            <FaFacebookF className="text-white text-2xl mr-5" />
            <FaLinkedinIn className="text-white text-2xl mr-5" />
            <FaYoutube className="text-white text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoWrapper;
