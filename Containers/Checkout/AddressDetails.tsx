import InputField from "@/common/Components/InputField/InputField";
import React from "react";

const AddressDetails = () => {
  return (
    <div className="address-container">
      <div className="title px-5 font-bold text-primary">
        <h2>ADDRESS DETAILS</h2>
      </div>
      <div className="black-underline w-full h-[1px] bg-[#707070] mt-2 "></div>
      <div className="form-wrapper flex md:flex-row flex-col md:my-6 my-5 gap-x-5 gap-y-5">
        <div className="flex-1 bg-[#4D4E53] rounded-[7px] px-5 pt-5">
          <InputField
            label="First Name *"
            type="text"
            name="first_name"
            style="text-white"
          />
          <InputField
            label="Last Name *"
            type="text"
            name="last_name"
            style="text-white"
          />
          <InputField
            label="Email *"
            type="email"
            name="email"
            style="text-white"
          />
          <InputField
            label="Mobile *"
            type="text"
            name="mobile"
            style="text-white"
          />
          <InputField
            label="Address *"
            type="text"
            name="first_name"
            style="text-white"
          />
          <InputField
            label="City *"
            type="text"
            name="city"
            style="text-white"
          />
        </div>
        <div className="flex-1 bg-[#4D4E53] rounded-[7px] px-5 pt-5">
          {" "}
          <InputField
            label="Country *"
            type="text"
            name="country"
            style="text-white"
          />
          <InputField
            label="Post Code *"
            type="text"
            name="post_code"
            style="text-white"
          />
          <div className="other-instruction flex flex-col">
            <label htmlFor="" className="text-white">
              Other Instruction
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              className="shadow-[0px_0px_6px_#00000042] rounded-[3px] mt-4 p-2 md:mb-0 mb-5"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="btn-continue flex item-center justify-center md:w-[88%] w-full ml-auto">
        <button className="bg-primary text-white py-2 font-bold px-5 rounded-[3px] shadow-[0px_3px_6px_#00000029]">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default AddressDetails;
