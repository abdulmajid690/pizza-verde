import React from "react";

const Tabs = () => {
  return (
    <div className="tabs-container grid grid-cols-3 items-center gap-x-5 py-5 w-full">
      <div className="step-1 px-3 py-3 shadow-[0px_3px_5px_#00000059] flex flex-col justify-between rounded-[7px] bg-primary text-white">
        <p>STEP 1</p>
        <p className="text-[18px]">LOGIN/REGISTER</p>
      </div>
      <div className="step-2 px-3 py-3 shadow-[0px_3px_5px_#00000059] flex flex-col justify-between rounded-[7px] bg-white">
        <p>STEP 2</p>
        <p className="text-[18px]">ADDRESS DETAILS</p>
      </div>
      <div className="step-3 px-3 py-3 shadow-[0px_3px_5px_#00000059] flex flex-col justify-between rounded-[7px] bg-white">
        <p>STEP 3</p>
        <p className="text-[18px]">REVIEW</p>
      </div>
    </div>
  );
};

export default Tabs;
