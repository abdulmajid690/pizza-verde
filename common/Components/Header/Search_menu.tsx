import React, { useState } from "react";
import Image from "next/image";
import whiteCart from "../../../common/images/white-cart.png";
import searchIcon from "../../../common/images/search-icon.png";
import profileIcon from "../../../common/images/profile-icon.png";
import Back from "../../../common/images/back.png";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Search_menu = () => {
  const dispatch = useDispatch();
  const { push, back, pathname } = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (event: any) => {
    event.preventDefault();
    if (inputValue.length) {
      push(`search?searchItem=${inputValue}`);
    }
  };
  const handleBack = () => {
    let targetUrl = "/";
    if (pathname === "/product") {
      targetUrl = "/menu";
    } else if (pathname === "/menu") {
      targetUrl = "/findstore";
    } else if (pathname === "/search") {
      targetUrl = "/menu";
    }

    push(targetUrl);
  };
  return (
    <form
      className="search_menu h-[120px] flex-1 flex flex-col justify-center bg-primary p-[15px] "
      onSubmit={handleSearch}
    >
      <div className="wrapper flex items-center">
        <div className="search-title flex-[1.4] flex items-center">
          <h1 className="text-4xl font-[BebasKai] tracking-wide text-white uppercase">
            Menu Store details
          </h1>
        </div>
        <div className="input-group flex-[1]">
          <div className="input-field flex items-center relative">
            <input
              type="text"
              placeholder="SEARCH MENU"
              className={
                "w-full h-[50px] text-[18px] text-[#FAFAFA] text-center rounded-[7px] flex-1 bg-[#005F1B] pl-2 opacity-[0.9] pr-[50px]"
              }
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer absolute right-4 w-6"
            >
              <Image src={searchIcon} alt="Profile" />
            </button>
          </div>
        </div>
        <div className="store_profile_icon flex-[0.7_0_0%] flex justify-around ">
          <div className="profile grid place-items-center">
            <Image src={profileIcon} alt="Profile" className="cursor-pointer" />
          </div>
          <div className="cart grid place-items-center">
            <Image src={whiteCart} alt="Cart" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="back_btn">
        <button
          type="button"
          className="h-[30px] w-[120px] bg-white text-black rounded-sm border-none flex justify-around items-center"
          onClick={() => back()}
        >
          <Image src={Back} alt="Back" className="w-6 cursor-pointer" />{" "}
          <p className="pr-2">Back</p>
        </button>
      </div>
    </form>
  );
};

export default Search_menu;
