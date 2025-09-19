import RegisterProfile from "@/Containers/RegisterProfile/RegisterProfile";
import Login from "@/common/Components/Login/Login";
import React from "react";
import Image from "next/image";
import loginImage from "@/common/images/login-pizza.png";
const register = () => {
  return (
    <div className="register-page max-w-[1280px] mx-auto flex md:flex-row flex-col py-10 relative md:px-10 px-5">
      <div className="md:w-[50%] w-full flex flex-col ">
        <Login />
        <Image
          src={loginImage}
          alt=""
          className="mx-auto md:mt-10 mt-5 h-[440px]"
        />
      </div>
      <div className="md:w-[50%] w-full ">
        <RegisterProfile />
      </div>
    </div>
  );
};

export default register;
